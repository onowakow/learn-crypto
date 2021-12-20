import { useState } from "react";
// fn(data) = SHA256 hash
import hashData from "../findHash";
import HasherTable from './HasherTable'

const HasherComplexInput = ({
  handleHash,
  data,
  resetSim,
  incrementNonce,
  nonce,
  tableData,
  children,
}) => {
  // Alert is typically displayed on button if button is triggered at invalid time.
  const [alert, setAlert] = useState(null);

  // locally reset sim (and at higher level)
  const reset = () => {
    setAlert(null);
    resetSim();
  };

  // component hashes data
  const handleHashData = (event) => {
    event.preventDefault();
    // No current data...Error
    if (data === null) {
      setAlert("no empty inputs");

      setTimeout(() => {
        setAlert(null);
      }, 3000);
    } else if (data[0] === "u") {
      // No previous hash...Error
      setAlert("unable to hash: previous hash undefined");

      setTimeout(() => {
        setAlert(null);
      }, 5000);
    } else {
      // data is valid. Hash data.
      const hashedData = hashData(data);

      // send data to parents.
      handleHash(hashedData);
    }
  };

  return (
    <>
      <div className="hasherForm">
        <div className="hasherInput">{data}</div>
        <div id="manualNonce">
          {
            /* Render manual nonce if incrementNonce fn provided */
            incrementNonce ? (
              <>
                <button onClick={incrementNonce} id="manualNonceButton">
                  increment nonce
                </button>
                <div id="nonceDisplay">{nonce}</div>
              </>
            ) : null
          }
          <button onClick={handleHashData} className="hasherButton">
            {alert ? alert : "generate hash"}
          </button>
        </div>
        <HasherTable inputHashArr={tableData}/>
      </div>
      <button onClick={reset} id="resetHasherButton" className="hasherButton">
        reset simulation
      </button>
    </>
  );
};

export default HasherComplexInput;
