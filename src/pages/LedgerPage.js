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
  return (
    <Container className="page">
      <Row className="justify-content-center">
        <Col className="interpretation" lg="7">
          <h3>The blockchain</h3>
          <p>
            All bitcoin transactions since bitcoin's creation have been recorded
            on a singular ledger called the blockchain. A block is a list of
            transactions that is chained to the previous block through
            cryptography.
          </p>
          <p>
            Pictured below is how we will imagine the blockchain. Each block
            should be pictured with several hundred transactions, but I included
            just one per block to make the chain easier to deal with. Take a
            quick glance as it as you scroll down, and we will explore the
            individual parts in greater detail below.
          </p>
          <p>
            (Note: older transactions are on top and newer transactions are
            below.)
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="demonstration" lg="7">
          <Ledger transactions={transactions} />
        </Col>
      </Row>
      <Row style={{ marginTop: "1em" }} className="justify-content-center">
        <Col className="interpretation" lg="7">
          <p>Let's explore the individual components of a block.</p>
          <p>
            Blocks are chained by cryptography to make the chain extremely
            difficult to defraud. Remember that bitcoin lacks any organized
            security. Instead, bitcoin can count on math and statistics to 
            make fraud nearly impossible.
          </p>
          <p>
            The first thing to notice about these blocks are their long
            identifying codes. These are known as hashes, and they are a
            product of cryptography. Hashes are the chain links in 
            blockchain. 
          </p>
          <div className="hash" style={{ marginBottom: "1em" }}>
            0000240779e10651b8bab9e68e458a45c40c4a21c55fe6cea8c4109d2857e213
          </div>
          <p>
            A hash like the one pictured above is generated from a{" "}
            <em>cryptographic hash function</em> (hence <em>crypto</em>
            currency). Hash functions, in a general sense, map data by a common
            system. For instance, hash In order to be a proper hashing function, an input must
            always map to a singular output (although the converse does not need
            to be true). We will continue looking into hashing on the next page.
          </p>
          <p>Next on the blocks, we see some transaction data.</p>
          <div className="data">
            <div>Sender ID: 892</div>
            <div>Recipient ID: 224</div>
            <div>Amount: 0.00040 bitcoin</div>
            <div>
              Date: Thu Apr 22 2021 16:34:21 GMT-0500 (Central Daylight Time)
            </div>
          </div>
          <p style={{ marginTop: "1em" }}>
            Real bitcoin blocks may contain several hundred transactions each. I
            will picture them with single transactions to save space and avoid
            clutter. Transactions include information about who sent money to
            who, how much was sent, and when the money was sent. Recall that
            bitcoins are not individually identifiable but rather exist as
            balances, so a true and complete record of bitcoin transactions is
            precisely where bitcoins 'live.' Software can look through the
            blockchain and determine how much bitcoin a person owns to ensure
            they are not trading money they do not have.
          </p>
          <p>
            Combining the transaction data, the hash of the previous block, and
            a special number called the nonce, hash functions can generate a
            hash to link the current block onto the blockchain. The transaction
            is thereby 'set in stone' as it officially marks the movement of
            value from one account to another.
          </p>
          <p>
            Hashes are the links in blockchain. By exploring the properties of
            hash functions and hashes themselves, we can better understand
            bitcoin.
          </p>
        </Col>
      </Row>
      <NextPage pageName="/simplehash" />
    </Container>
  );
};

export default LedgerPage;
