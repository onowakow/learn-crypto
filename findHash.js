

const args = process.argv.slice(2)

if (args.length < 1 || args.length > 1) {
  console.log("Use: node findHash <data to hash>")
  process.exit(1)
}

const crypto = require('crypto')
const sha256 = crypto.createHash('sha256')


/* CONVERTS HASH TO NUMBER, UNNECESSARY

  // hashedData returns string. Concatinate '0x' for number parsing
  const hashedDataStringPlus0x = `0x${hashedDataString}`

  // convert to number
  const numberHashedData = Number(hashedDataStringPlus0x)
  console.log('numberHashedData', numberHashedData, 'type', typeof numberHashedData)
*/

// hashes data into sha256 hex. 64 characters.
const hashData = (data) => {
  const hashedDataString = sha256.update(data).digest('hex')
  return hashedDataString
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
  console.log('called')
  console.log(`${prevHash}${nonce}`)
  // new hash
  const newHash = hashData(`${prevHash}${nonce}`)

  // test previous hash with nonce added
  return newHash.length < 63
    ? [newHash, nonce]
    : findLowHash(prevHash, desiredLength, nonce + 1)
}

console.log(findLowHash(
  'cd6357efdd966de8c0cb2f876cc89ec74ce35f0968e11743987084bd42fb8944',
  63,
  0
))
