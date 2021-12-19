import Transaction from "../components/Transaction";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import Ledger from '../components/Ledger'

const transactions = [
  {
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
    hash: '0000240779e10651b8bab9e68e458a45c40c4a21c55fe6cea8c4109d2857e213',
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
    hash: '0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89',
    className: "officialTransaction",
    date: new Date(2021, 3, 22, 14, 12, 57).toString(),
    sender: 592,
    recipient: 164,
    amount: "0.00050",
    denom: "bitcoin",
    prevHash: '0000240779e10651b8bab9e68e458a45c40c4a21c55fe6cea8c4109d2857e213',
  },
  {
    hash: '0000f5d1915da1fbc132ced081325efcd2e63e4804f96890f42e9739677237a4',
    className: "officialTransaction",
    date: new Date(2021, 3, 24, 2, 34, 15).toString(),
    sender: 592,
    recipient: 734,
    amount: "0.00050",
    denom: "bitcoin",
    prevHash: '0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89'
  },
];
/* further explanation on currency.

<p>If you are having a hard time understanding why currency does not need
            inherent value, consider the following. If you and a partner share 
            grocery bills, which is more important to you: that after buying groceries,
            your partner immediately compensates you? Or that <em>over time</em> the
            amount each of you spend on groceries remains roughly equivalent?
          </p> */

const LedgerPage = () => {
  return (
    <Container className='page'>
      <Row className='justify-content-center'>
        <Col className='interpretation' lg='9'>
          Beep boop
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className='demonstration' lg='9'>
          <Ledger transactions={transactions} />
        </Col>
      </Row>

    </Container>
  );
};

export default LedgerPage;
