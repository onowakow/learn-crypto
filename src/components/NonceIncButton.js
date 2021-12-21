
const NonceIncButton = ({ incrementNonce, nonce }) => {

  return (
    <>
      <button onClick={incrementNonce} id="manualNonceButton">
        increment nonce
      </button>
      <div id="nonceDisplay">{nonce}</div>
    </>
  );
};

export default NonceIncButton;
