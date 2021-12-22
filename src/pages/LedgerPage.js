import { useState } from "react";
import TransactionHover from "../components/TransactionHover";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Ledger from "../components/Ledger";

const transactions = [
  {
    nonce: null,
    className: "officialTransaction",
    date: new Date(2021, 3, 21, 8, 24, 1).toString(),
    sender: 164,
    recipient: 281,
    amount: "0.00120",
    denom: "bitcoin",
    hash: "0000ebb33521297e4a78c294e6a362a256d915140b7b440b7fcdd7f4abd2087b",
    prevHash:
      "0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89",
  },
  {
    nonce: null,
    hash: "0000240779e10651b8bab9e68e458a45c40c4a21c55fe6cea8c4109d2857e213",
    className: "officialTransaction",
    date: new Date(2021, 3, 22, 12, 45, 26).toString(),
    sender: 281,
    recipient: 164,
    amount: "0.15000",
    denom: "bitcoin",
    prevHash:
      "0000ebb33521297e4a78c294e6a362a256d915140b7b440b7fcdd7f4abd2087b",
  },
  {
    nonce: null,
    hash: "0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89",
    className: "officialTransaction",
    date: new Date(2021, 3, 22, 14, 12, 57).toString(),
    sender: 592,
    recipient: 164,
    amount: "0.00050",
    denom: "bitcoin",
    prevHash:
      "0000240779e10651b8bab9e68e458a45c40c4a21c55fe6cea8c4109d2857e213",
  },
  {
    nonce: null,
    hash: "0000f5d1915da1fbc132ced081325efcd2e63e4804f96890f42e9739677237a4",
    className: "officialTransaction",
    date: new Date(2021, 3, 24, 2, 34, 15).toString(),
    sender: 592,
    recipient: 734,
    amount: "0.00050",
    denom: "bitcoin",
    prevHash:
      "0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89",
  },
];

const LedgerPage = () => {
  const [content, setContent] = useState();

  // if i pass handleHover(date), I need handleHover to call a function called exploreDate

  const handleClick = (topic) => {
    // 'Explore' object contains functions
    const Explore = {
      date: () => {
        setContent(<p>Exploring date</p>);
      },
    };

    return Explore[topic];
  };

  return (
    <Container className="page">
      <Row className="justify-content-center">
        <Col className="interpretation" lg="9">
          <h3>The ledger</h3>
          <p>
            Ledgers track transactions. Consider a ledger shared between three
            neighbors who commonly trade goods and services, such as lawn
            mowing, baked goods, and produce. Rather than exchanging cash,
            the neighbors create a shared ledger, say on Google Drive. The
            purpose of the ledger is to balance their exchanges.
          </p>
          <p>
            Bitcoin is similar to the neighbors' shared ledger. Bitcoin's ledger,
            which I will refer to as the blockchain to avoid confusion, is likewise
            shared over the internet and available for all to edit and add to. 
            The neighbors' ledger works because the neighbors trust each other,
            but how is bitcoin secure at all?.

          </p>
          <p>Pictured below is our representation of the blockchain.</p>
          <p></p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="demonstration" lg="9">
          <Ledger transactions={transactions} />
          <div
            style={{
              width: "100%",
              minHeight: "10em",
              border: "1px solid black",
            }}
          >
            {content}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LedgerPage;
