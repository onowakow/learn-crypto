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
  nonce
}) => {
  return (
    <div className={className}>
      <div
        className='hash'
      >
        <b>Block {hash ? hash : '[not yet verified]'}</b>
      </div>
      <div
        className='data'
      >
        <div>Previous Hash: {prevHash}</div>
        <div><u>Transaction data:</u></div>
        <div>Sender ID: {sender}</div>
        <div>Recipient ID: {recipient}</div>
        <div>
          Amount: {amount} {denom}
        </div>
        <div>Date: {date}</div>
        {nonce !== null ? (
          <TransactionVerified nonce={nonce} />
        ): null}
      </div>
    </div>
  );
};

export default Transaction;
