const HasherPropInput = ({ nonce, data }) => {
  return (
    <div className="hasherForm">
      <div className="hasherInput">
        {nonce !== null ? <b>{nonce}{' '}</b> : null}
        {data ? (
          data
        ) : (
          <div style={{ color: "red" }}>[pass transaction data from above]</div>
        )}
      </div>
    </div>
  );
};

export default HasherPropInput;
