const args = process.argv.slice(2)

if (args.length < 1 || args.length > 1) {
  console.log("Use: node findHash <data to hash>")
  process.exit(1)
}
const sha256 = require('crypto-js/sha256')

// hashes data into sha256 hex. 64 characters.
const hashData = (data) => {
  return sha256(data).toString()
}

/* Thinking out loud: hashData returns 64 hex characters. If we need a certain numbers of
  preceding zeros, it is simple enough to look for a length under 64 characters. 

  Difficulty is number of preceding zeros. For instance, difficulty of 1 would be 63 
  characters with a leading zero.  */

/*
const desiredLength = 63
const prevHash = 'cd6357efdd966de8c0cb2f876cc89ec74ce35f0968e11743987084bd42fb8944'
const nonce = 0
*/

const findLowHash = (prevHash, desiredLength, nonce) => {
  // new hash
  const newHash = hashData(`${prevHash}${nonce}`)

  console.log(newHash)

  // test previous hash with nonce added
  
  return newHash[0] === '0' && newHash[1] === '0' && newHash[2] === '0' && newHash[3] === '0'
    ? [newHash, nonce]
    : findLowHash(prevHash, desiredLength, nonce + 1)
  
}


console.log(findLowHash(
  "cd6357efdd966de8c0cb2f876cc89ec74ce35f0968e11743987084bd42fb8944",
  63,
  0  
))
