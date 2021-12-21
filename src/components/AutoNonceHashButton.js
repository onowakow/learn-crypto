import cryptoFn from "../findHash";
import { useState } from "react";

// findLowHash: (data, difficulty, nonce)
// all buttons do their own hashing.
const AutoNonceHashButton = ({ difficulty, data, handleHashObject }) => {
  const handleClick = () => {
    const hashObj = cryptoFn.findLowHash(data, difficulty, 0);
    // pass hash object to parent
    handleHashObject(hashObj);
  };

  return (
    <div>
      <button onClick={handleClick} className="hasherButton">
        find hash with {difficulty === "0" ? "no" : difficulty}
        {difficulty !== "1" ? " leading zeros" : " leading zero"}
      </button>
    </div>
  );
};

export default AutoNonceHashButton;
