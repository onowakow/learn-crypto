// const sha256 = require('crypto-js/sha256')

// hashes data into sha256 hex. 64 characters.

/* Thinking out loud: hashData returns 64 hex characters. If we need a certain numbers of
preceding zeros, it is simple enough to look for a length under 64 characters. 

Difficulty is number of preceding zeros. For instance, difficulty of 1 would be 63 
characters with a leading zero.  */

/*
const desiredLength = 63
const prevHash = 'cd6357efdd966de8c0cb2f876cc89ec74ce35f0968e11743987084bd42fb8944'
const nonce = 0
*/

const cryptoFn = {
  hashData: (data) => {
    const sha256 = require("crypto-js/sha256");
    return sha256(data).toString();
  },

  findLowHash: (data, difficulty, nonce) => {
    // Initialize final object
    const returnObj = {}

    // stop difficulty over 2.
    if (difficulty > 3) {
      console.log('Difficulty to large for current state of function')
      return
    }

    // new hash
    const newHash = cryptoFn.hashData(`${nonce} ${data}`);
    const newHashNumber = parseInt(newHash, 16);
    
    if (newHashNumber >= Math.pow(16, 64 - difficulty)) {
      return cryptoFn.findLowHash(data, difficulty, nonce + 1);
    } 

    return (
      {
        hash: newHash,
        difficulty: difficulty,
        nonce: nonce,
      }
    ) 

  },
};


export default cryptoFn
