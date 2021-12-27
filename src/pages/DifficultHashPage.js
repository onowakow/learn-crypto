import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ManualInput from "../components/ManualInput";
import AutoNonceHashButton from "../components/AutoNonceHashButton";
import DifficultyHasherTable from "../components/DifficultyHasherTable";
import ResetButton from "../components/ResetButton";
import NextPage from "../components/NextPage";
import HasherPropInput from "../components/HasherPropInput";
import TransactionVerified from "../components/TransactionVerified";

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
          <h4>Making hashing difficult</h4>
          <p>
            When a bitcoin transaction is made, it queues up with other pending
            transactions on an unattached block. The block awaits verification,
            where it will be attached to the blockchain to update the record of
            who owns what. All miners are broadcasted special criteria for how
            the particular block's hash must look, such as beginning with four
            leading zeros (as in the hash shown directly below). Miners test
            varied inputs to try to satisfy this hash condition.
          </p>
          <div className="hash" style={{ marginBottom: "1em" }}>
            0000240779e10651b8bab9e68e458a45c40c4a21c55fe6cea8c4109d2857e213
          </div>
          <p>
            Miners calculate a hash by inputting the block's data, the previous
            block's hash, and a special number called a <b>nonce</b> (the word
            'nonce' comes from cryptography, and its meaning is not particularly
            helpful to us). While the first two inputs are set values for a
            given block, the nonce must be varied by the miner to generate
            varied hashes.
          </p>
          <div className="extra">
            The nonce allows a hash value to vary so that special hash criteria
            can be met.
          </div>
          <p>
            Miners can use any value they want for the nonce, but for
            simplicity, we will start with zero and simulate generating a hash.
          </p>
          <TransactionVerified nonce={0} />
          <div className="hash" style={{ marginBottom: "1em" }}>
            2a26c466a3017315beb56e069e776e166f12422372115407608d6364f37a794c
          </div>
          <p>
            Unsurprisingly, the first attempted nonce value did not happen to
            create a hash with four leading zeros. The miner could then add 1 to
            the nonce.
          </p>
          <TransactionVerified nonce={1} />
          <div className="hash" style={{ marginBottom: "1em" }}>
            a98bf958af15d4936a992cbdf5bb47831c7ba01bfca87c0cca4978705c71c4a3
          </div>
          <p>
            Again, the results are not surprising. The miner will continue to
            increment the nonce until he or she reaches a satisfactory hash.
            Because these hashes are shown in base-16, there's about a 1 in 16
            chance any one digit will be a zero. For each successive 0, these
            chances become exponentially lower. Two zeros will appear on average
            about once in 256 (16*16) nonce values, while four consecutive zeros
            appear only once in 65,530 (16*16*16*16) nonce values. If my
            computer was powerful enough to find such a value, the hash and
            nonce may look something like this:
          </p>
          <TransactionVerified nonce="108,925" />
          <div className="hash" style={{ marginBottom: "1em" }}>
            0000c7541f1c558664174f280bcfe2bc42be1969061f62317e4a1a1bb33fb7b3
          </div>
          <p>
            In this example, it took 108,925 attempted nonce values to find a
            valid hash, which would be a strikingly small number of attempts in
            reality. About one block (globally) is verified every ten minutes
            despite the sheer magnitude of computing power dedicated to the job.
            In fact,{" "}
            <a href="https://www.businessinsider.com/bitcoin-mining-electricity-usage-more-than-google-2021-9">
              bitcoin mining collectively uses 7 times more energy that all of
              Google's servers (and about 1/2 of 1% of the world's energy
              consumption).
            </a>{" "}
            For all that energy to be expended on creating these hashes, it's
            safe to say that they are using exceedingly difficult hash criteria.
            As computers get faster and more people and companies mine, bitcoin
            simply makes hashing more difficult and{" "}
            <b>the verification rate hovers around once every ten minutes.</b>
          </p>
          <p></p>
          <p>
            The demonstration below shows how increasing the number of leading
            zeros makes the number of nonce guesses increase exponentially. This
            program simply starts the nonce at zero, checks if the hash fits the
            criteria, increases the nonce, checks again, and repeats. The
            program can only safely look for up to two leading zeros (without
            crashing the browser). Luckily, the demonstration still gives us a
            good idea of how the number of tries increases with each increase in
            difficulty.
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
          <button
            style={{ marginTop: "1em" }}
            className="toggleButton"
            onClick={toggleInputType}
          >
            current input type: {inputType === 0 ? "manual" : "transaction"}
          </button>
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
      <Row className="justify-content-center" style={{ marginTop: "1em" }}>
        <Col className="interpretation" lg="7">
          <p>
            Miners are rather aptly named. Miners write programs to search day
            in and day out for rare and valuable nonce values. While gold miners
            may have a general idea of where gold can be found based on past
            experiences, the distribution of winning nonce values is completely
            random. Many articles online explain that miners 'solve mathematical
            puzzles.' I think that's a bit of a stretch.
          </p>
          <p>
            Why bother with such a chore? Currently, a successful block
            verification has a reward of 6.25 bitcoins for the miner who finds
            the nonce. At the time of typing this, a single bitcoin is worth
            around $50,000 USD. That means miners are searching for $300,000
            nuggets. Miners also receive transaction fees for verifying
            transactions. The bitcoin reward is halved every 210,000 blocks, so
            eventually these fees will eventually be the main incentive for
            mining. As a result of regular halving, there is a finite number of
            bitcoins which can ever be created.
          </p>
        </Col>
      </Row>

      <NextPage pageName="/ledgerhash" />
    </Container>
  );
};

export default DifficultHashPage;
