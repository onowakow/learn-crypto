import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            Welcome to understanding crypto, an interactive guide to bitcoin and
            blockchain technologies. There are many great articles on this topic
            online, but very few include visual components, and I have yet to
            see an interactive exploration of the technology. This guide’s
            purpose is to give the reader a feel for how bitcoin works. It is
            not meant for reference. This application was created by Owen
            Nowakowski using the React library.
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
              The 'true' bitcoin ledger is the longest one. Creating a
              fraudulent bitcoin transaction would require a conspiracy of 51%
              of the world's mining power. This is highly improbably.
            </li>
          </ol>
          <p>Let's begin with bitcoin's ledger, built on a technology called <em>blockchain</em>.</p>
          <Link to="/ledger">
            <button className="primaryButton">next page</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
