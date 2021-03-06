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
              Bitcoins exist as balances assigned to personal ID's. Person
              #738495 may have 1.23 bitcoin (roughly equivalent to $60,000 as of
              December 2021). We can verify that Person #738495 actually has
              this balance because every trade that led to #738495 getting this
              value has been recorded on the blockchain. We can trust this
              history to be a true account because of the security added by
              hashes.
            </p>
            <p>
              Recall that hashing functions map inputs to outputs. Bitcoin uses
              hashes to link blocks in the blockchain. The input for the hashing
              function includes transaction data, the previous block's hash, and
              a special number called the nonce. To understand what is generally
              meant by a hash function, we'll start with a simple example of
              one.
            </p>
            <p>
              Imagine you work in Human Resources and are tasked with giving a
              unique ID number to each of your employees. Giving employees
              random numbers would be haphazard so you decide to systematize the
              problem by creating a hashing function. One such function would be
              to assign each person a hash based on their first and last
              initials (by position in the alphabet) and date-of-birth,
              transferring each element of the person's data as a two digit
              number. John Doe, born on 03/21/1976, would have the hash
              1004-032176 (J and D are the 10th and 4th letters of the alphabet
              respectively, and his DOB is shortened to 03 21 76). This hash
              function provides a method of mapping each person to an
              identification number.
            </p>
            <p>
              Bitcoin uses a cryptographic hash function called SHA-256. Unlike
              the office example where one can easily find the initials and DOB
              from the person's hash, there is no method for finding the input
              for a given SHA-256 hash beyond guessing.
            </p>
            <div className="extra" style={{ marginBottom: "1em" }}>
              The hash generated by SHA-256 is a 64 digit hexadecimal number
              (hexadecimal is base-16, meaning that each digit can represent a
              number between 0 and 16, with digits 10-16 represented by
              letters).
            </div>
            <p>
              Test out the hash function below. It is a real SHA-256 generator
              that creates hashes in real time. Feel free to experiment with the
              following:
            </p>
            <ul>
              <li>
                Type any word, sentence, or number, click 'generate hash' and
                look at the output, which will be shown in the table below the
                button.
              </li>
              <li>
                Try slightly changing your input. Notice how the output is
                completely different for similar inputs.
              </li>
              <li>
                Notice how identical inputs always generate the same output
                hash. The function will be case sensitive and extra spaces will
                create different hashes.
              </li>
              <li>
                Finally, try to find a hash that starts with a zero. Then try to
                find a hash that starts with four zeros. Remember that it is
                impossible to predict the SHA-256 hash, so you will just have to
                try random inputs. (This is a fool's errand: as we'll see on the
                next page, you may need around 65,000 attempts to find a hash
                with four leading zeros).
              </li>
            </ul>
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
        <Row style={{ marginTop: "1em" }} className="justify-content-center">
          <Col className="interpretation" lg="7">
            <p>
              SHA-256 hashes are computationally easy to generate. They become
              difficult to generate when certain criteria are required for the
              hash to be valid (such as requiring each hash to start with four
              zeros). By making hashes exceedingly difficult to generate, the
              power of verification becomes distributed and no one person or
              group can take control of the 'true' blockchain.
            </p>
            <p>Next, we'll explore making hashing difficult.</p>
          </Col>
        </Row>
        <NextPage pageName="/difficulthash" />
      </Container>
    </>
  );
};

export default SimpleHashPage;
