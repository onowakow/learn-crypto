import Transaction from "../components/Transaction";
import HasherComplexInput from "../components/HasherComplexInput";
import { useState } from "react";
import hashData from "../findHash";

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
  // data to hash. Will be given to hasher component.
  const [toHash, setToHash] = useState(null);

  // index stores index of data stored in state toHash
  const [indexOfToHash, setIndexOfToHash] = useState(null);

  const [transactions, setTransactions] = useState(storedTransactions);

  // alert displays on button ('generate hash') if transactions not made in order
  const [buttonAlert, setButtonAlert] = useState(null);

  const resetSim = () => {
    setTransactions(storedTransactions);
    setToHash(null);
    setIndexOfToHash(null);
    setButtonAlert(null);
  };

  const handleButtonClick = (transaction, i) => {
    setIndexOfToHash(i);
    setToHash(
      `${transaction.prevHash}
${transaction.date}
${transaction.sender}
${transaction.recipient}
${transaction.amount}`
    );
  };

  console.log(buttonAlert);

  const handleHashData = (event) => {
    event.preventDefault();

    // hash the data found in toHash state
    /* hash appears different when using other hasher. There may be issues
     with formatting. I don't think this will get in the way of this app's
     educative mission.*/
    if (toHash === null) {
      setButtonAlert('no empty inputs')
      setTimeout(() => {
        setButtonAlert(null)
      }, 3000)
      // Do not do anything of toHash it null.
      return;
    }

    if (toHash[0] === "u") {
      setButtonAlert("undefined hash: previous transaction still unverified");
      setTimeout(() => {
        setButtonAlert(null);
      }, 5000);
      return;
    }

    const hashedData = hashData(toHash);

    // update transactions array
    setTransactions(
      transactions.map((transaction, i) =>
        i === indexOfToHash
          ? Object.assign({}, transaction, { hash: hashedData })
          : i === indexOfToHash + 1
          ? Object.assign({}, transaction, { prevHash: hashedData })
          : transaction
      )
    );
    setToHash(null);
  };

  return (
    <div className="page">
      <div className="interpretation">
        [ledger hash][this page is one of the more complication ones] [currently
        allows premature hashing.]
      </div>
      <div className="demonstration">
        {transactions.map((transaction, i) => (
          <div className="ledgerHashItem">
            <Transaction
              className={transaction.className}
              /* Date will be unique in this app */
              key={transaction.date}
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
          handleHashData={handleHashData}
          data={toHash}
          resetSim={resetSim}
          buttonAlert={buttonAlert}
        />
      </div>
    </div>
  );
};

export default LedgerHashPage;
