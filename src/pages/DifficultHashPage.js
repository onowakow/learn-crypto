import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ManualInput from "../components/ManualInput";
import AutoNonceHashButton from "../components/AutoNonceHashButton";
import DifficultyHasherTable from "../components/DifficultyHasherTable";
import ResetButton from "../components/ResetButton";
import NextPage from "../components/NextPage";
import HasherPropInput from "../components/HasherPropInput";

// two-fold page. Lets user manual nonce increment and auto nonce increment
const defaultTableData = [
  [0, 0, "fee83545b73fe2cbad32a017b84894a65fd44fbb77cfa0564053864f1a80de8c"],
  [1, 13, "0173b86325cdd9d667caf015e0817dfb61144204477476c8b294a1ad68fc322c"],
  [2, 148, "00f9b047ec467be1e9da5690dfdf330b33eb73d1f2257bcabd91e244677fa2cc"],
];

const DifficultHashPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState(0);

  const [difficultyNonceHashArray, setDifficultyNonceHashArray] =
    useState(defaultTableData);
  const [difficulty, setDifficulty] = useState(0);
  const [nonce, setNonce] = useState(null);

  // Limits difficulty settings.
  const difficulties = [0, 1, 2];

  const handleHashObject = (hashObj) => {
    const arr = [hashObj.difficulty, hashObj.nonce, hashObj.hash];
    if (inputType === 1) {
      setNonce(hashObj.nonce);
    }
    let dNHACopy = difficultyNonceHashArray;
    // Manage hash array size to under 20
    if (dNHACopy.length > 20) {
      dNHACopy = dNHACopy.slice(1);
    }

    setDifficultyNonceHashArray(dNHACopy.concat([arr]));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleReset = () => {
    setDifficultyNonceHashArray(defaultTableData);
    setInputValue("");
    setNonce(null);
  };

  const updateDifficulty = (value) => {
    setDifficulty(value);
  };

  const toggleInputType = () => {
    inputType === 0 ? setInputType(1) : setInputType(0);
  };

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
        "0000723774c572bd8a25adbeb2bfcd5c0256ae11cecf9f9c3f925d0e52beaf89",
    },
  ];

  const transaction = transactions[0];

  const transactionData = `${transaction.prevHash}
${transaction.date}
${transaction.sender}
${transaction.recipient}
${transaction.amount}`;

  return (
    <Container className="page">
      <Row className="justify-content-center">
        <Col className="interpretation" lg="7">
          <h4>Making hashing hard</h4>
          <p>
            SHA-256 hashes with <em>special traits</em> link together
            transactions in the blockchain. Verifying the transactions by
            finding these special hashes is the work of miners.
          </p>
          <p>
            Along with transaction data and the previous hash, a third value
            called the nonce is input for the hash function. Miners search
            through possible nonce values to find a hash with the special traits
            mandated by the blockchain's setup.
          </p>
          <p>
            One such special trait could be a certain number of leading zeros on
            the hash (like the three leading zeros in '0004e0779ebb...').
            Because hashes are impossible to predict, miners must guess at the
            nonce value to find a special hash.
          </p>
          <p>
            The demonstration below shows how increasing the number of leading
            zeros makes the nonce increase in size. This program simply starts
            the nonce at zero, checks if the hash fits the criteria, increases
            the nonce, checks again, and repeats.
          </p>
          <p>
            By toggling the input type, you can see how a transaction may look
            when it is hashed. There will also be a bold number to the left of 
            the transaction data (after hashing) that is the calculated nonce.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="demonstration" lg="7">
          <button className="toggleButton" onClick={toggleInputType}>
            current input type: {inputType === 0 ? "manual" : "transaction"}
          </button>
          <p>input:</p>
          {inputType === 0 ? (
            <ManualInput handleChange={handleInputChange} value={inputValue} />
          ) : (
            <HasherPropInput nonce={nonce} data={transactionData} />
          )}
          <div className="difficultyControls">
            <div className="buttonSet">
              {difficulties.map((setting) => (
                <button
                  onClick={() => updateDifficulty(setting)}
                  className="difficultyButton"
                  id={setting === difficulty ? "selectedButton" : null}
                >
                  difficulty {setting}
                </button>
              ))}
            </div>

            <AutoNonceHashButton
              data={inputType === 0 ? inputValue : transactionData}
              handleHashObject={handleHashObject}
              difficulty={difficulty}
            />
          </div>
          {/* hash */}
          <DifficultyHasherTable
            difficultyNonceHashArray={difficultyNonceHashArray}
          />
          <ResetButton handleReset={handleReset} />
        </Col>
      </Row>
      <NextPage pageName="/ledgerhash" />
    </Container>
  );
};

export default DifficultHashPage;
