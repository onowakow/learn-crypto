import HasherComplexInput from "../components/HasherComplexInput";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ledger from "../components/Ledger";
import HasherPropInput from '../components/HasherPropInput'
import ResetButton from "../components/ResetButton";
import AutoNonceHashButton from '../components/AutoNonceHashButton'

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
  },
  {
    className: "officialTransaction",
    nonce: null,
    date: new Date(2021, 3, 22, 14, 12, 57).toString(),
    sender: getRandID(),
    recipient: getRandID(),
    amount: "0.00050",
    denom: "bitcoin",
  },
  {
    className: "officialTransaction",
    nonce: null,
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
      transactions.map((transaction, i) =>
        i === indexOfToHash
          ? Object.assign({}, transaction, { hash: hashObject.hash, nonce: hashObject.nonce })
          : i === indexOfToHash + 1
          ? Object.assign({}, transaction, { prevHash: hashObject.hash })
          : transaction
      )
    );
  };

  return (
    <Container className="page" fluid="md">
      <Row className="justify-content-center">
        <Col className="interpretation" lg="7">
          [ledger hash][this page is one of the more complication ones]
          [currently allows premature hashing.]
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="demonstration" lg='7'>
          <Ledger
            handleButtonClick={handleButtonClick}
            transactions={transactions}
          />
          <HasherPropInput data={stringToHash}/>
          <AutoNonceHashButton difficulty={'2'} data={stringToHash} handleHashObject={handleHashObject} />
          <ResetButton handleReset={handleReset} />
        </Col>
      </Row>
    </Container>
  );
};

export default LedgerHashPage;
