import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ledger from "../components/Ledger";
import HasherPropInput from "../components/HasherPropInput";
import ResetButton from "../components/ResetButton";
import AutoNonceHashButton from "../components/AutoNonceHashButton";
import NextPage from "../components/NextPage";

const minerID = 238445;

const getRandID = () => Math.floor(Math.random() * 100000);
const storedTransactions = [
  {
    className: "officialTransaction",
    nonce: 143,
    date: new Date(2021, 3, 21, 8, 24, 1).toString(),
    sender: getRandID(),
    recipient: getRandID(),
    amount: "0.00120",
    denom: "bitcoin",
    hash: "0082ebb33521297e4a78c294e6a362a256d915140b7b440b7fcdd7f4abd2087b",
    prevHash:
      "00be718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89",
    award: 6.25,
    awardRecipient: 326432,
  },
  {
    className: "officialTransaction",
    nonce: null,
    date: new Date(2021, 3, 22, 12, 45, 26).toString(),
    sender: getRandID(),
    recipient: getRandID(),
    amount: "0.15000",
    denom: "bitcoin",
    prevHash:
      "0082ebb33521297e4a78c294e6a362a256d915140b7b440b7fcdd7f4abd2087b",
    award: 6.25,
    awardRecipient: minerID,
  },
  {
    className: "officialTransaction",
    nonce: null,
    date: new Date(2021, 3, 22, 14, 12, 57).toString(),
    sender: getRandID(),
    recipient: getRandID(),
    amount: "0.00050",
    denom: "bitcoin",
    award: 6.25,
    awardRecipient: minerID,
  },
  {
    className: "officialTransaction",
    nonce: null,
    date: new Date(2021, 3, 24, 2, 34, 15).toString(),
    sender: getRandID(),
    recipient: getRandID(),
    amount: "0.00050",
    denom: "bitcoin",
    award: 6.25,
    awardRecipient: minerID,
  },
];

const LedgerHashPage = () => {
  // string to hash. Will be given to hasher component.
  const [stringToHash, setStringToHash] = useState(null);
  // index stores index of data stored in state toHash
  const [indexOfToHash, setIndexOfToHash] = useState(null);

  const [transactions, setTransactions] = useState(
    storedTransactions.slice(0, 2)
  );

  const handleReset = () => {
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

  const handleHashObject = (hashObject) => {
    // Clear hasher input
    setStringToHash(null);

    // update transactions array
    setTransactions(
      indexOfToHash <= 2
        ? transactions
            .concat(storedTransactions[indexOfToHash + 1])
            .map((transaction, i) =>
              i === indexOfToHash
                ? Object.assign({}, transaction, {
                    hash: hashObject.hash,
                    nonce: hashObject.nonce,
                  })
                : i === indexOfToHash + 1
                ? Object.assign({}, transaction, { prevHash: hashObject.hash })
                : transaction
            )
        : indexOfToHash === 3
        ? transactions.map((transaction, i) =>
            i === indexOfToHash
              ? Object.assign({}, transaction, {
                  hash: hashObject.hash,
                  nonce: hashObject.nonce,
                })
              : transaction
          )
        : null
    );
  };

  return (
    <Container className="page" fluid="md">
      <Row className="justify-content-center">
        <Col className="interpretation" lg="7">
          <h4>Putting it all together</h4>
          <p>
            Mining is central to making bitcoin legitimate. Because bitcoins
            lack individual identification, the flow of bitcoin value must be
            precisely tracked from account to account on the blockchain.
            Transactions wait to be verified in blocks, where difficult-to-find
            hashes will eventually link them to the blockchain.
          </p>
          <p>
            Below is a quick simulation of the mining process. The block
            pictured on top is the most recent block in the chain. Each new
            block will need to be hashed by passing its data to the hasher.
            Notice how the data is passed as a string containing the previous
            block's hash and the current transaction data.
          </p>
          <p>
            A new transaction block will pop as you verify the present one.
            Notice that the blocks include a record that you have been rewarded
            bitcoin for successful mining. This is the only instance where
            bitcoins are ever generated. Note: after you have four blocks on
            the screen, you will be unable to continue the demonstration.
          </p>
          <div className="extra">
            Where this demo falls short: Remember that verifying multiple
            consecutive blocks in reality would be next to impossible, as this
            would require outcompeting the world's computer power.
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="demonstration" lg="7">
          <Ledger
            handleButtonClick={handleButtonClick}
            transactions={transactions}
          />
          Your bitcoin ID: {minerID}
          <HasherPropInput data={stringToHash} />
          <AutoNonceHashButton
            difficulty={"2"}
            data={stringToHash}
            handleHashObject={handleHashObject}
          />
          <ResetButton handleReset={handleReset} />
        </Col>
      </Row>
      <NextPage pageName='conclusion' />
    </Container>
  );
};

export default LedgerHashPage;
