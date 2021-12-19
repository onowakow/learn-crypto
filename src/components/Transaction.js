const Transaction = ({
  date,
  sender,
  recipient,
  hash,
  prevHash,
  amount,
  className,
  denom,
}) => {
  return (
    <div className={className}>
      <div
        className='hash'
      >
        <b>Transaction {hash ? hash : '[not yet verified]'}</b>
      </div>
      <div
        className='data'
      >
        <div>Previous Hash: {prevHash}</div>
        <div>Sender ID: {sender}</div>
        <div>Recipient ID: {recipient}</div>
        <div>
          Amount: {amount} {denom}
        </div>
        <div>Date: {date}</div>
      </div>
    </div>
  );
};

export default Transaction;
