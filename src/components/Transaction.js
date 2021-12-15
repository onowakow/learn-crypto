const Transaction = ({
  date,
  sender,
  recipient,
  hash,
  amount,
  className,
  denom,
}) => {
  return (
    <div className={className}>
      <div
        style={{
          backgroundColor: "#f4e3b2",
        }}
      >
        <b>Transaction {hash ? hash : '[not hashed]'}</b>
      </div>
      <div
        style={{
          color: 'white',
          backgroundColor: '#028090'
        }}  
      >
        <div>Sender: {sender}</div>
        <div>Recipient: {recipient}</div>
        <div>
          Amount: {amount} {denom}
        </div>
        <div>Date: {date}</div>
      </div>
    </div>
  );
};

export default Transaction;
