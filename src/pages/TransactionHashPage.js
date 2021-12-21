import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Ledger from "../components/Ledger";
import ResetButton from "../components/ResetButton";
import HasherPropInput from "../components/HasherPropInput";
import HashButton from "../components/HashButton";
import NonceIncButton from "../components/NonceIncButton";

const TransactionHashPage = () => {
  const [input, setInput] = useState("");

  // Array contains arrays of [input, output]
  const [inputHashArray, setInputHashArray] = useState([]);

  // Contains single hash in this example
  const [hash, setHash] = useState("");

  // Boolean, whether nonce or not
  const [isNonce, setIsNonce] = useState(false);

  // Stores nonce value
  const [nonce, setNonce] = useState(null);

  const transactions = [
    {
      className: "officialTransaction",
      date: new Date(2021, 3, 21, 8, 24, 1).toString(),
      sender: 243,
      recipient: 163,
      amount: "0.00120",
      denom: "bitcoin",
      hash: "hash: undefined",
      prevHash:
        "0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89",
    },
  ];

  const transaction = transactions[0];

  const transactionData = `${transaction.prevHash}
${transaction.date}
${transaction.sender}
${transaction.recipient}
${transaction.amount}`;

  const handleReset = () => {
    setInputHashArray([]);
    setInput("");
    setHash("");
    if (isNonce) {
      setNonce(0)
    }
  };

  const handleTransactionData = () => {
    setInput(transactionData);
  };

  const handleArray = (array) => {
    if (array[0] !== "") {
      setHash(array[1]);
    }
  };

  const handleNonceChange = (event) => {
    if (event.target.checked) {
      setIsNonce(true)
      setNonce(0)
    } else {
      setIsNonce(false)
      setNonce(null)
    }
  };

  const incrementNonce = () => {
    setNonce(nonce + 1);
  };

  return (
    <Container className="page">
      <Row className="justify-content-center">
        <Col className="interpretation" lg="9">
          I will test out sample components here for the refactor
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="demonstration" lg="9">
          <Ledger transactions={transactions} />
          <button id="passDataButton" onClick={handleTransactionData}>
            pass data to hasher
          </button>
          {/* Simple checkbox allows user to include a nonce. */}
          <form>
            <input onChange={handleNonceChange} type="checkbox" id="isNonce" />
            <label for="isNonce">include nonce?</label>
          </form>
          {isNonce ? (
            <NonceIncButton nonce={nonce} incrementNonce={incrementNonce} />
          ) : null}
          <HasherPropInput nonce={nonce} data={input} />
          <HashButton nonce={nonce} data={input} handleArray={handleArray} />
          <div className="singleHash">
            <b>hash: </b>
            {hash}
          </div>
          <ResetButton handleReset={handleReset} />
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionHashPage;
