pragma solidity ^0.4.24;

import "./token/SafeMath.sol";
import "./util/Stoppable.sol";
import "./token/ERC20.sol";
import "./token/StandardToken.sol";


/**
 * @title e2pAir Escrow Contract
 * @dev Contract sends tokens from airdropper's account to receiver on claim.
 * 
 * When deploying contract, airdroper provides airdrop parametrs: token, amount 
 * of tokens and amount of eth should be claimed per link and  airdrop transit 
 * address and deposits ether needed for the airdrop.
 * 
 * Airdrop transit address is used to verify that links are signed by airdropper. 
 * 
 * Airdropper generates claim links. Each link contains a private key 
 * signed by the airdrop transit private key. The link private key can be used 
 * once to sign receiver's address. Receiver provides signature
 * to the Relayer Server, which calls smart contract to withdraw tokens. 
 * 
 * On claim smart contract verifies, that receiver provided address signed 
 * by a link private key. 
 * If everything is correct smart contract sends tokens and ether to receiver.
 * 
 * Anytime airdropper can get back unclaimed ether using getEtherBack method.
 * 
 */
contract e2pAirEscrow is Stoppable {

  uint public BRONZE_BADGE_ID = 7;
  uint public SILVER_BADGE_ID = 8;
  uint public GOLD_BADGE_ID = 9;

  address public TOKEN_ADDRESS; // token to distribute
  uint public CLAIM_AMOUNT; // tokens claimed per link
  uint public REFERRAL_AMOUNT; // referral reward
  uint public REFERRAL_AMOUNT_2;

  uint public CLAIM_AMOUNT_ETH; // ether claimed per link
  address public AIRDROPPER; // airdropper address, which has tokens to distribute
  address public AIRDROP_TRANSIT_ADDRESS; // special address, used on claim to verify
  // that links signed by the airdropper

  Badges private badges;

  mapping (address => uint) referrals;


  event LogWithdraw(
		    address transitAddress,
		    address receiver,
		        uint timestamp
		    );

  // Mappings of transit address => true if link is used.
  mapping (address => bool) usedTransitAddresses;

  /**
   * @dev Contructor that sets airdrop params and receives ether needed for the 
   * airdrop. 
   * @param _tokenAddress address Token address to distribute
   * @param _claimAmount uint tokens (in atomic values) claimed per link
   * @param _claimAmountEth uint ether (in wei) claimed per link
   * @param _airdropTransitAddress special address, used on claim to verify that links signed by airdropper
   * @param _badgesAddress pillar badges contract address 
   */
  constructor(address _tokenAddress,
	      uint _claimAmount,
	      uint _referralAmount,
        uint _referralAmount2,
	      uint _claimAmountEth,
	      address _airdropTransitAddress,
        address _badgesAddress) public payable {
    AIRDROPPER = msg.sender;
    TOKEN_ADDRESS = _tokenAddress;
    CLAIM_AMOUNT = _claimAmount;
    REFERRAL_AMOUNT = _referralAmount;
    REFERRAL_AMOUNT_2 = _referralAmount2;
    CLAIM_AMOUNT_ETH = _claimAmountEth;
    AIRDROP_TRANSIT_ADDRESS = _airdropTransitAddress;
    badges = Badges(_badgesAddress);
  }

  /**
   * @dev Verify that address is signed with needed private key.
   * @param _transitAddress transit address assigned to transfer
   * @param _addressSigned address Signed address.
   * @param _v ECDSA signature parameter v.
   * @param _r ECDSA signature parameters r.
   * @param _s ECDSA signature parameters s.
   * @return True if signature is correct.
   */
  function verifyLinkPrivateKey(
				address _transitAddress,
				address _addressSigned,
				address _referralAddress,
				uint8 _v,
				bytes32 _r,
				bytes32 _s)
    public pure returns(bool success) {
    bytes32 prefixedHash = keccak256("\x19Ethereum Signed Message:\n32", _addressSigned, _referralAddress);
    address retAddr = ecrecover(prefixedHash, _v, _r, _s);
    return retAddr == _transitAddress;
  }


  /**
   * @dev Verify that address is signed with needed private key.
   * @param _transitAddress transit address assigned to transfer
   * @param _addressSigned address Signed address.
   * @param _v ECDSA signature parameter v.
   * @param _r ECDSA signature parameters r.
   * @param _s ECDSA signature parameters s.
   * @return True if signature is correct.
   */
  function verifyReceiverAddress(
				 address _transitAddress,
				 address _addressSigned,
				 uint8 _v,
				 bytes32 _r,
				 bytes32 _s)
    public pure returns(bool success) {
    bytes32 prefixedHash = keccak256("\x19Ethereum Signed Message:\n32", _addressSigned);
    address retAddr = ecrecover(prefixedHash, _v, _r, _s);
    return retAddr == _transitAddress;
  }

  /**
   * @dev Verify that claim params are correct and the link key wasn't used before.  
   * @param _recipient address to receive tokens.
   * @param _transitAddress transit address provided by the airdropper
   * @param _keyV ECDSA signature parameter v. Signed by the airdrop transit key.
   * @param _keyR ECDSA signature parameters r. Signed by the airdrop transit key.
   * @param _keyS ECDSA signature parameters s. Signed by the airdrop transit key.
   * @param _recipientV ECDSA signature parameter v. Signed by the link key.
   * @param _recipientR ECDSA signature parameters r. Signed by the link key.
   * @param _recipientS ECDSA signature parameters s. Signed by the link key.
   * @return True if claim params are correct. 
   */
  function checkWithdrawal(
			   address _recipient,
			   address _referralAddress,
			   address _transitAddress,
			   uint8 _keyV,
			   bytes32 _keyR,
			   bytes32 _keyS,
			   uint8 _recipientV,
			   bytes32 _recipientR,
			   bytes32 _recipientS)
    public view returns(bool success) {

    // verify that link wasn't used before
    require(usedTransitAddresses[_transitAddress] == false);

    // verifying that key is legit and signed by AIRDROP_TRANSIT_ADDRESS's key
    require(verifyLinkPrivateKey(AIRDROP_TRANSIT_ADDRESS, _transitAddress, _referralAddress, _keyV, _keyR, _keyS));

    // verifying that recepients address signed correctly
    require(verifyReceiverAddress(_transitAddress, _recipient, _recipientV, _recipientR, _recipientS));

    // verifying that there is enough ether to make transfer
    require(address(this).balance >= CLAIM_AMOUNT_ETH);

    return true;
  }

  /**
   * @dev Withdraw tokens to receiver address if withdraw params are correct.
   * @param _recipient address to receive tokens.
   * @param _transitAddress transit address provided to receiver by the airdropper
   * @param _keyV ECDSA signature parameter v. Signed by the airdrop transit key.
   * @param _keyR ECDSA signature parameters r. Signed by the airdrop transit key.
   * @param _keyS ECDSA signature parameters s. Signed by the airdrop transit key.
   * @param _recipientV ECDSA signature parameter v. Signed by the link key.
   * @param _recipientR ECDSA signature parameters r. Signed by the link key.
   * @param _recipientS ECDSA signature parameters s. Signed by the link key.
   * @return True if tokens (and ether) were successfully sent to receiver.
   */
  function withdraw(
		    address _recipient,
		    address _referralAddress,
		    address _transitAddress,
		    uint8 _keyV,
		    bytes32 _keyR,
		    bytes32 _keyS,
		    uint8 _recipientV,
		    bytes32 _recipientR,
		    bytes32 _recipientS
		    )
        public
        whenNotPaused
        whenNotStopped
    returns (bool success) {

    require(checkWithdrawal(_recipient,
			    _referralAddress,
			    _transitAddress,
			    _keyV,
			    _keyR,
			    _keyS,
			    _recipientV,
			    _recipientR,
			    _recipientS));


    // save to state that address was used
    usedTransitAddresses[_transitAddress] = true;

    // send tokens
    if (CLAIM_AMOUNT > 0 && TOKEN_ADDRESS != 0x0000000000000000000000000000000000000000) {
      StandardToken token = StandardToken(TOKEN_ADDRESS);
      token.transferFrom(AIRDROPPER, _recipient, CLAIM_AMOUNT);
    }

    // send tokens to the address who refferred the airdrop
    if (REFERRAL_AMOUNT > 0 && _referralAddress != 0x0000000000000000000000000000000000000000 && TOKEN_ADDRESS != 0x0000000000000000000000000000000000000000) {
      StandardToken token2 = StandardToken(TOKEN_ADDRESS);
      //pillar customization for referrals
      referrals[_referralAddress] = referrals[_referralAddress] + 1;

      if(referrals[_referralAddress] <= 10) {
        token2.transferFrom(AIRDROPPER, _referralAddress, REFERRAL_AMOUNT);
      } else if(referrals[_referralAddress] == 11) {
        //transfer the bronze badge
        badges.awardToken(BRONZE_BADGE_ID,_referralAddress,1);
      } else if(referrals[_referralAddress] >= 20) {
        token2.transferFrom(AIRDROPPER, _referralAddress, REFERRAL_AMOUNT_2);
        if(referrals[_referralAddress] == 50) {
          //transfer silver badge
          badges.awardToken(SILVER_BADGE_ID,_referralAddress,1);
        } else if(referrals[_referralAddress] == 100) {
          //transfer golden badge
          badges.awardToken(GOLD_BADGE_ID,_referralAddress,1);
        }
      }
    }


    // send ether (if needed)
    if (CLAIM_AMOUNT_ETH > 0) {
      _recipient.transfer(CLAIM_AMOUNT_ETH);
    }

    // Log Withdrawal
    emit LogWithdraw(_transitAddress, _recipient, now);

    return true;
  }

  /**
   * @dev Get boolean if link is already claimed. 
   * @param _transitAddress transit address provided to receiver by the airdropper
   * @return True if the transit address was already used. 
   */
  function isLinkClaimed(address _transitAddress)
    public view returns (bool claimed) {
    return usedTransitAddresses[_transitAddress];
  }

  /**
   * @dev Withdraw ether back deposited to the smart contract.  
   * @return True if ether was withdrawn. 
   */
  function getEtherBack() public returns (bool success) {
    require(msg.sender == AIRDROPPER);

    AIRDROPPER.transfer(address(this).balance);


    return true;
  }

}
