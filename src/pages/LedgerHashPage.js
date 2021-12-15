import Transaction from "../components/Transaction";
import HasherComplexInput from "../components/HasherComplexInput";
import { useState } from "react";
import hashData from '../findHash'

const LedgerHashPage = () => {
  const [toHash, setToHash] = useState(null);
  // index stores index of data stored in state toHash
  const [indexOfToHash, setIndexOfToHash] = useState(null);

  console.log(toHash);
  const transactions = [
    {
      className: "officialTransaction",
      date: new Date(2021, 3, 21, 8, 24, 1).toString(),
      sender: "Casey",
      recipient: "Owen",
      amount: "10",
      denom: "friendcoin",
      hash: "0000ebb33521297e4a78c294e6a362a256d915140b7b440b7fcdd7f4abd2087b",
      prevHash:
        "0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89",
    },
    {
      className: "officialTransaction",
      date: new Date(2021, 3, 22, 12, 45, 26).toString(),
      sender: "Owen",
      recipient: "Dax",
      amount: "15",
      denom: "friendcoin",
      prevHash:
        "0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89",
    },
    {
      className: "officialTransaction",
      date: new Date(2021, 3, 22, 14, 12, 57).toString(),
      sender: "Owen",
      recipient: "Dax",
      amount: "15",
      denom: "friendcoin",
    },
  ];

  const handleButtonClick = (transaction, i) => {
    setIndexOfToHash(i)
    setToHash(
`${transaction.prevHash}
${transaction.date}
${transaction.sender}
${transaction.recipient}
${transaction.amount}`
    );
  };

  const handleHashData = (event) => {
    event.preventDefault()

    // hash the data found in toHash state
    // hash appears different when using other hasher. There may be issues
    // with formatting. I don't think this will get in the way of this app's
    // educative mission.
    const hashedData = hashData(toHash)
  
    console.log(hashedData)
    // update 
  }

  return (
    <div className="page">
      <div className="interpretation">
        [ledger hash][this page is one of the more complication ones]
      </div>
      <div className="demonstration">
        {transactions.map((transaction, i) => (
          <div className="ledgerHashItem">
            <Transaction
              className={transaction.className}
              date={transaction.date}
              sender={transaction.sender}
              recipient={transaction.recipient}
              amount={transaction.amount}
              denom={transaction.denom}
              hash={transaction.hash}
            />
            {transaction.hash ? null : (
              <button
                style={{
                  color: "black",
                  border: "2px solid #c3423F",
                  backgroundColor: "white",
                }}
                className="btn-span"
                onClick={() => handleButtonClick(transaction, i)}
              >
                pass data to hasher below
              </button>
            )}
          </div>
        ))}
        <HasherComplexInput handleHashData={handleHashData} data={toHash} />
      </div>
    </div>
  );
};

export default LedgerHashPage;
