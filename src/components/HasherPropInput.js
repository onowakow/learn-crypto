const HasherPropInput = ({ nonce, data }) => {
  return (
    <div className="hasherForm">
      <div className="hasherInput">
        <b>{nonce} </b>
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
