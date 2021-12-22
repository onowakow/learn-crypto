import TransactionVerified from './TransactionVerified'

const Transaction = ({
  date,
  sender,
  recipient,
  hash,
  prevHash,
  amount,
  className,
  denom,
  nonce,
  handleClick
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
        <div onClick={handleClick('date')}>Date: {date}</div>
        {nonce !== null ? (
          <TransactionVerified nonce={nonce} />
        ): null}
      </div>
    </div>
  );
};

export default Transaction;
