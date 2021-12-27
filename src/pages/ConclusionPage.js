import { Container, Row, Col } from "react-bootstrap";

const ConclusionPage = () => {
  return (
    <Container className="page">
      <Row className="justify-content-center">
        <Col className="interpretation" lg="7">
          <h4>Let's recap</h4>
          <p>
            Bitcoin is a digital currency which exists as balances across
            personal accounts. Individual bitcoins do not exist in any
            identifiable sense, like how the water in a gallon jug is impossible
            to distinguish after combining it with another gallon. For this
            reason, bitcoin values must be carefully tracked as they are bought
            and sold between accounts.
          </p>
          <p>
            Blockchain is the secure decentralized ledger which tracks who owns
            how much bitcoin. Blocks contain transactions, and miners compete to
            find valid hashes to link unlinked blocks onto the blockchain. The
            longest blockchain is the true blockchain because successful fraud
            is statistically improbable. A criminal could maybe link one
            fraudulent transaction onto the chain, but they would then need to
            personally link several consecutive blocks to assert the truth of
            the chain. A successful criminal would need to somehow outcompete
            every miner for each subsequent block. This is not possible without
            controlling over 50% of the world's mining computer power.
          </p>
          <p>
            Bitcoin and blockchain provide the service of secure and
            decentralized currency, but not without a price. There are plenty of
            articles online about the environmental impact of mining digital
            currency, and the current energy consumption from cryptocurrencies
            is astounding. Whether or not the service is worth the price is up
            for debate.
          </p>
          <p>For more information on bitcoin, I recommend a couple resources:</p>
          <ul>
            <li>
              For more beginner-friendly information: Youtube Channel 3Blue1Brown's video{" "}
              <a href="https://www.youtube.com/watch?v=bBC-nXj3Ng4">How does bitcoin actually work?</a>
            </li>
            <li>
              For a technical look: Satoshi Nakamoto's{" "}
              <a href="https://bitcoin.org/bitcoin.pdf">original paper</a>
              {" "}outlining the technology of bitcoin
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="demonstration" lg="7"></Col>
      </Row>
    </Container>
  );
};

export default ConclusionPage;
