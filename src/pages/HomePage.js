import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="page">
      <Row className="justify-content-center">
        <Col className="interpretation" lg="9">
          <h1 style={{ textAlign: "right" }}>
            Welcome to understanding crypto{" "}
          </h1>
          <h3 style={{ textAlign: "right" }}>
            an interactive guide about bitcoin
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="demonstration" lg="9">
          <h4>Getting started</h4>
          <p>
            I will assume you have previously heard of the <em>bitcoin</em>.
            Bitcoin is a digital currency with no cental authority or mint.
            While the US Dollar relies on myriad security features and strict
            penalties for forgery, bitcoin uses cryptography to create
            difficult-to-solve computer problems, making forgery and fraud a
            statistical improbability (bordering on an impossibility).
          </p>
          <p>
            This guide will let you interact with the cryptography which keep
            bitcoin secure. This guide is about understanding and not about
            being an official reference. Many details have been tweaked, added
            to, or left out all together for the sake of not over complicating
            things. I hope that by the end of this experience you walk away
            with a better understanding, or feel, for how bitcoin works.
          </p>
          <h5>Bitcoin comes down to a few simple points:</h5>
          <p>These points will be expanded on through the guide.</p>
          <ol>
            <li>Bitcoin is a digital ledger.</li>
            <li>
              The ledger has no central home or official 'bookkeeper' and anyone
              can add to or edit their copy of the ledger.
            </li>
            <li>
              Transactions on the ledger are linked together using hard-to-solve
              computer problems.
            </li>
            <li>
              Solving these problems (in a process called 'mining') happens
              globally (on average) once every ten minutes, and the miner is
              given bitcoin as a reward. This is the sole origin of new bitcoin.
            </li>
            <li>
              The 'true' bitcoin ledger will be the longest one. Creating a
              fraudulent bitcoin transaction would require a conspiracy of 51%
              of the world's mining power. This is highly improbably.
            </li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
