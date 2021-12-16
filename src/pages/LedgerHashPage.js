import Transaction from "../components/Transaction";
import HasherComplexInput from "../components/HasherComplexInput";
import { useState } from "react";

const getRandID = () => Math.floor(Math.random() * 100000);
const storedTransactions = [
  {
    className: "officialTransaction",
    date: new Date(2021, 3, 21, 8, 24, 1).toString(),
    sender: getRandID(),
    recipient: getRandID(),
    amount: "0.00120",
    denom: "bitcoin",
    hash: "0000ebb33521297e4a78c294e6a362a256d915140b7b440b7fcdd7f4abd2087b",
    prevHash:
      "0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89",
  },
  {
    className: "officialTransaction",
    date: new Date(2021, 3, 22, 12, 45, 26).toString(),
    sender: getRandID(),
    recipient: getRandID(),
    amount: "0.15000",
    denom: "bitcoin",
    prevHash:
      "0000ebb33521297e4a78c294e6a362a256d915140b7b440b7fcdd7f4abd2087b",
  },
  {
    className: "officialTransaction",
    date: new Date(2021, 3, 22, 14, 12, 57).toString(),
    sender: getRandID(),
    recipient: getRandID(),
    amount: "0.00050",
    denom: "bitcoin",
  },
  {
    className: "officialTransaction",
    date: new Date(2021, 3, 24, 2, 34, 15).toString(),
    sender: getRandID(),
    recipient: getRandID(),
    amount: "0.00050",
    denom: "bitcoin",
  },
];

const LedgerHashPage = () => {
  // string to hash. Will be given to hasher component.
  const [stringToHash, setStringToHash] = useState(null);
  // index stores index of data stored in state toHash
  const [indexOfToHash, setIndexOfToHash] = useState(null);

  const [transactions, setTransactions] = useState(storedTransactions);

  const resetSim = () => {
    setTransactions(storedTransactions);
    setIndexOfToHash(null);
    setStringToHash(null);
  };

  const handleButtonClick = (transaction, i) => {
    setIndexOfToHash(i);
    setStringToHash(`${transaction.prevHash}
${transaction.date}
${transaction.sender}
${transaction.recipient}
${transaction.amount}`);
  };

  const handleHash = (sha) => {
    // Clear hasher input
    setStringToHash(null);

    // update transactions array
    setTransactions(
      transactions.map((transaction, i) =>
        i === indexOfToHash
          ? Object.assign({}, transaction, { hash: sha })
          : i === indexOfToHash + 1
          ? Object.assign({}, transaction, { prevHash: sha })
          : transaction
      )
    );
  };

  return (
    <div className="page">
      <div className="interpretation">
        [ledger hash][this page is one of the more complication ones] [currently
        allows premature hashing.]
      </div>
      <div className="demonstration">
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
        <HasherComplexInput
          handleHash={handleHash}
          data={stringToHash}
          resetSim={resetSim}
        />
      </div>
    </div>
  );
};

export default LedgerHashPage;
