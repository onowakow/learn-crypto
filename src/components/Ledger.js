import Transaction from './Transaction'

const Ledger = ({transactions, handleButtonClick}) => {
  return (
    <>
    {transactions.map((transaction, i) => (
      <div className="ledgerHashItem" key={transaction.date}>
        <Transaction
          className={transaction.className}
          date={transaction.date}
          sender={transaction.sender}
          recipient={transaction.recipient}
          amount={transaction.amount}
          denom={transaction.denom}
          hash={transaction.hash}
          prevHash={transaction.prevHash}
          nonce={transaction.nonce}
        />
        {transaction.hash ? null : (
          <button
            id="transactionButton"
            className="spanButton"
            onClick={() => handleButtonClick(transaction, i)}
          >
            pass data to hasher below
          </button>
        )}
      </div>
    ))}
    </>
  )
}

export default Ledger