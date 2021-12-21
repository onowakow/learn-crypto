import cryptoFn from "../findHash";
import { useState } from "react";

// findLowHash: (data, difficulty, nonce)
// all buttons do their own hashing.
const AutoNonceHashButton = ({ data, handleHashObject }) => {
  const [difficulty, setDifficulty] = useState(0);

  const updateDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const handleClick = () => {
    const hashObj = cryptoFn.findLowHash(data, difficulty, 0)
    // pass hash object to parent
    console.log(hashObj)
    handleHashObject(hashObj)
  }

  return (
    <div>
      {/* currently difficulty is set by range. Perhaps a selector with number of leading zeros would be better */}
      <input
        onChange={updateDifficulty}
        type="range"
        id="difficulty"
        name="difficulty"
        min="0"
        max="2"
        value={difficulty}
      />
      <label for="difficulty">adjust difficulty</label>
      <button onClick={handleClick} className="hasherButton"></button>
    </div>
  );
};

export default AutoNonceHashButton;
