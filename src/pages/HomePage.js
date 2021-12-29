import { Container, Row, Col } from "react-bootstrap";
import NextPage from "../components/NextPage";

const HomePage = () => {
  return (
    <Container className="page">
      <Row className="justify-content-center">
        <Col className="interpretation" lg="7">
          <h1 style={{ textAlign: "right" }}>understanding crypto</h1>
          <h3 style={{ textAlign: "right" }}>
            an interactive guide to bitcoin
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="demonstration" lg="7">
          <h4 style={{ marginTop: "1em" }}>Introduction</h4>

          <p>
            Welcome to understanding crypto! This guide will attempt to teach
            the fundamental concepts of how bitcoin and blockchain technologies
            work. This guide is meant to be interactive, so please try the
            demonstrations after reading each section.
          </p>

          <h4>An overview of bitcoin</h4>

          <p>
            Don't worry if some of this doesn't make sense the first time you
            read it. All concepts on this page will be revisited later in the
            guide.
          </p>

          <p>
            Bitcoin is a digital currency. It can be used like any other
            currency to buy and exchange goods (assuming a vendor accepts it).
            Bitcoin values are tracked on a ledger, called the blockchain, where
            they are assigned to people's unique IDs.
          </p>

          <p>
            Bitcoins, in some sense, do not exist. They have no physical token,
            no precious metal standard, and they don't even have unique
            identification numbers to distinguish one coin from the next.
            Instead, bitcoins live as <em>amounts of value</em> attributed to
            one person or another on a ledger (called the blockchain). Without
            being able to show a physical or digital object to prove ownership
            of 'a bitcoin', a complete histories of personal balances is
            recorded to prove who owns what.
          </p>

          <div className="extra" style={{ marginBottom: "1em" }}>
            Reminder: The blockchain is the single ledger that tracks all
            bitcoin transactions.
          </div>

          <p>
            The blockchain mysteriously lacks any governing organization or
            other oversight, and there's no central website or server where the
            blockchain officially lives. Instead, people share copies of the
            blockchain, always trusting the longest ledger.
          </p>

          <p>
            The verity of the longest ledger is due to a concept called{" "}
            <em>proof-of-work,</em> which says the longest ledger is the true
            ledger because of the amount of computation necessary to confirm
            each transaction. Fraud would involve the criminal confirming their
            own transaction, followed by enough future transactions to grow
            their chain longer than the presently-accepted chain. This is
            incredibly unlikely due to the mathematical nature of bitcoin
            confirmation.
          </p>

          <p>
            Transactions are confirmed in a process called 'mining,' which is
            closely analogous to guessing at lottery numbers. The <em>only</em>{" "}
            way to have a better chance at successfully confirming a transaction
            is to get more computing power. To commit fraud on the blockchain
            would be like winning several lotteries in a row despite millions of
            people also playing to win.
          </p>

          <h4>How does mining work?</h4>

          <p>
            Let's review some components of bitcoin. First, we have{" "}
            <b>transactions</b>, which are records of bitcoin amounts being
            traded. Transactions are grouped into <b>blocks</b>. <b>Miners</b>{" "}
            run random numbers through computers to find the ones which satisfy
            a mathematical lottery, and upon success, chain the new blocks onto
            the pre-existing <b>blockchain</b>.
          </p>

          <p>
            The exact mathematical mechanism that connects one block to the next
            is what lends bitcoin its security and will be a major interest of
            this guide. Before then, we must get a clearer idea of the
            blockchain and the role it plays in bitcoin.
          </p>
        </Col>
        <NextPage pageName="ledger" />
      </Row>
    </Container>
  );
};

export default HomePage;
