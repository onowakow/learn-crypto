import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HasherTable from "../components/HasherTable";
import ManualInput from "../components/ManualInput";
import HashButton from "../components/HashButton";
import ResetButton from "../components/ResetButton";
import NextPage from "../components/NextPage";

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
      setInputHashArray(inputHashArray.slice(1).concat([array]));
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

  return (
    <>
      <Container className="page" fluid="md">
        <Row className="justify-content-center">
          <Col className="interpretation" lg="7">
            <h4>Hashes</h4>
            <p>
              Before we get any further, I want to clarify how bitcoin and
              blockchain relate. Blockchain is the reason why a bitcoin can 
              be trusted to be authentic. Bitcoin without the blockchain would
              be like the US Mint printing money on an office printer. By
              tracking all bitcoin transactions, the blockchain gives bitcoin
              validity. So how exactly does blockchain work?
            </p>
            <p>
              Hashes are created with hash functions, which transform one value
              into another. For example, imagine you work in Human Resources and
              are tasked with giving a unique ID number to your employees. One
              such method would be to assign each person a hash based on their
              first initial, last initial, and date-of-birth, transferring each
              element of the person's data as a two digit number.
            </p>
            <p>
              John Doe, born on 03/21/1976, would have the hash 1004-032176 (J
              and D are the 10th and 4th letters of the alphabet respectively,
              and his DOB has been shortened to 03 21 76.).
            </p>
            <p>
              This is called a hash <em>function</em> because every input has
              exactly one possible output. There is only one possible hash for
              each employee.
            </p>
            <p>
              Bitcoin makes use of a cryptographic hash function (hence crypto)
              called SHA-256. Unlike the office example where one can easily
              find the initials and DOB from the person's hash, there is no
              method for finding the input for a given SHA-256 hash beyond
              guessing.
            </p>
            <p>
              Test out the hash function below. It is a real SHA-256 generator
              that creates hashes in real time. Type any word, sentence, number,
              etc. in the field below and click the button to find the hash.
              Note how slightly changing an input drastically changes the
              output. Likewise, note how identical inputs generate identical
              hashes. These hashes link together transactions in the blockchain
              in ways which we will see later.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="demonstration" lg="7">
            <ManualInput value={input} handleChange={handleChange} />
            <HashButton data={input} handleArray={handleArray} />
            <HasherTable inputHashArray={inputHashArray} />
            <ResetButton handleReset={handleReset} />
          </Col>
        </Row>
        <NextPage pageName="/difficulthash" />
      </Container>
    </>
  );
};

export default SimpleHashPage;
