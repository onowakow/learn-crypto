import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NextPage from "../components/NextPage";
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
  const [isStrike, setIsStrike] = useState(0);

  const handleStrikeClick = () => {
    setIsStrike(1);
  };

  return (
    <Container className="page">
      <Row className="justify-content-center">
        <Col className="interpretation" lg="7">
          <h3>The blockchain</h3>
          <p>Pictured below is how we will imagine the blockchain. Older transactions
            are on top and newer transactions are below.
          </p>
          <div className='hash'>0000240779e10651b8bab9e68e458a45c40c4a21c55fe6cea8c4109d2857e213</div>
          {/*
          <p>
            All bitcoins are created on the blockchain, and the blockchain
            tracks every bitcoin transaction. Through securely linking one
            transaction to the next, one can trace a bitcoin through time and
            determine its validity. Blockchain is what prevents bitcoin from
            being counterfeit, so how does it work?
          </p>
          <p>
            A blockchain is a series of distinct data units linked together by
            cryptography. For bitcoin, each unit (called a block) contains data
            about bitcoin transactions. (Note: blockchain is a technology used
            beyond bitcoin, but I will use 'blockchain' to refer to bitcoin's
            blockchain.) We can think about the blockchain as a ledger, like the
            one below.
          </p>
          <table>
            <tbody>
              <tr>
                <td>Bob paid Lisa</td>
                <td>$20</td>
              </tr>
              <tr>
                <td>Lisa paid Andrew</td>
                <td>$15</td>
              </tr>
              {isStrike === 0 ? (
                <tr>
                  <td>Andrew paid Bob</td>
                  <td>$30</td>
                </tr>
              ) : (
                <tr>
                  <td>
                    <strike>Andrew paid Bob</strike>
                  </td>
                  <td>
                    <strike>$30</strike>
                  </td>
                </tr>
              )}
              {isStrike === 0 ? (
                <tr>
                  <td>Lisa paid Bob</td>
                  <td>$25</td>
                </tr>
              ) : (
                <tr>
                  <td>
                    <strike>Lisa paid Bob</strike>
                  </td>
                  <td>
                    <strike>$25</strike>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <p style={{ marginTop: "1em" }}>
            This ledger is obviously a simple one. It includes data on who sent
            money to who and how much was sent. The downfall of a ledger like
            above (and where the blockchain differs) is how easily the ledger
            can be manipulated. Click the button below to defraud the ledger.
          </p>
          <button className="miscButton" onClick={handleStrikeClick}>
            make Bob richer
          </button>
          <p style={{ marginTop: "1em" }}>
            Imagine in this instance, that Bob goes to the ledger and erases
            proof that he was paid by his debtors. Now Bob can claim that Andrew
            and Lisa have yet to pay him and collectively own him $55. Likewise,
            bitcoin is tracked on the blockchain, where people trade a currency
            represented by mere data: what stops people from double spending
            their digital money? What stops someone from erasing proof that they
            got paid? Blockchain stops these attacks by linking ledger
            information using cryptography.
          </p>
          <p>points
            The blockchain is special because of how it chains together
            -blockchain chains transactions
            -this is important because bitcoin's security relies on tracking a coin's history
            -imagine a bitcoin as an identifying string of characters (like '903748256'). 
                what stops someone from literally copying and pasting this bitcoin from their neighbor's wallet to their own?
                Absolutely nothing would differentiate mine and my neighbor's copy.
            -transactions are chained together such that modifying any transaction
                data invalidates the entire chain, as each subsequent block needs 
                to be updated.
            -lottery makes it very unlikely for someone to make broad change
          </p>
          <p>
            When a bitcoin is spent, the transaction information gets sent to a
            waiting room where it awaits verification. The process of
            verification requires a sort of lottery system where so-called miners
            try number after number, hoping to 'win the powerball.' A miner succeeds 
            when a valid hash is found and all the transactions in the waiting room 
            are added to the blockchain.
          </p>
          <p>The virtue of this lottery-like verification system is that the likelihood
            of  </p>
          <p>
            Below is a more realistic picture of the blockchain. I show each
            block as having a single transaction, but in actuality, each block
            may contain several hundred transactions at a time. The long strings
            of characters found next to 'Block' is called a hash. The hashes are
            part of what chains the blocks together. Notice how each block
            includes both its own hash and the hash of the previous block (older
            blocks will be above more recent blocks).
          </p>
        */}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="demonstration" lg="7">
          <Ledger transactions={transactions} />
        </Col>
        <p></p>
        <NextPage pageName="/simplehash" />
      </Row>
    </Container>
  );
};

export default LedgerPage;
