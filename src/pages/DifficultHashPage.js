import { Container, Row, Col } from "react-bootstrap";
import HasherComplexInput from "../components/HasherComplexInput";
import Ledger from "../components/Ledger";
import { useState } from "react";

const DifficultHashPage = () => {
  const defaultData = [
    "0",
    "1e5e29e54d7f2a3f5ff5445144b099580ea21390b14ef96c89ab226126a215c3",
  ];

  const [nonce, setNonce] = useState(0);
  const [tableData, setTableData] = useState([ defaultData ]);
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

  const incrementNonce = () => {
    setNonce(nonce + 1);
  };

  // called on 'generate hash' click
  const handleHash = (hash) => {
    let currentTableData = tableData
    if (tableData.length > 9) {
      currentTableData = tableData.slice(1)
    }
    setTableData(currentTableData.concat([[nonce, hash]]));
  };

  const resetSim = () => {
    setNonce(0);
    setTableData([ defaultData ]);
  };

  // not responsive to above transaction data. A static demonstration
  const transactionData = `${nonce}
0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89
${new Date(2021, 3, 21, 8, 24, 1).toString()}
${243}
${163}
${0.0012}`;

  console.log(tableData);

  return (
    <Container className="page" fluid="md">
      <Row className="justify-content-center">
        <Col className="interpretation" lg="9">
          Some placeholder text
        </Col>
      </Row>
      <Row>
        <Col className="demonstration" lg="9">
          <Ledger transactions={transactions} />
          <HasherComplexInput
            data={transactionData}
            handleHash={handleHash}
            resetSim={resetSim}
            incrementNonce={incrementNonce}
            nonce={nonce}
            tableData={tableData}
          ></HasherComplexInput>
        </Col>
      </Row>
    </Container>
  );
};

export default DifficultHashPage;
