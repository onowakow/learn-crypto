import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Ledger from "../components/Ledger";
import HasherTable from "../components/HasherTable";
import ManualInput from "../components/ManualInput";
import HashButton from "../components/HashButton";
import ResetButton from "../components/ResetButton";

const defaultArray = [
  [
    "some sample data.",
    "2cf7ebb33521297e4a78c294e6a362a256d915140b7b440b7fcdd7f4abd2087b",
  ],
  [
    "12/15/21 12:31 PM",
    "82b08343a9a38c4b99f7d4973be2eef8bb7778fd9231262c75bcae673336a499",
  ],
];

const SimpleHashPage = () => {
  const [input, setInput] = useState("");

  // Array contains arrays of [input, output]
  const [inputHashArray, setInputHashArray] = useState(defaultArray);

  const handleArray = (array) => {
    // Reset input after adding data to array
    setInput("");

    // Check array size and adjust
    if (inputHashArray.length > 9) {
      setInputHashArray(inputHashArray.slice(1).concat([array]))
    } else {
      setInputHashArray(inputHashArray.concat([array]));
    }
  };
  
  const handleReset = () => {
    setInputHashArray(defaultArray);
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // hashes data and populates table (table found in Hasher)
  
  return (
    <>
      <Container className="page" fluid="md">
        <Row className="justify-content-center">
          <Col className="interpretation" lg="9">
            [Simple hash iteractive][Will explain how hashing works]
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="demonstration" lg="9">
            <ManualInput value={input} handleChange={handleChange} />
            <HashButton data={input} handleArray={handleArray} />
            <HasherTable inputHashArray={inputHashArray} />
            <ResetButton handleReset={handleReset} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SimpleHashPage;
