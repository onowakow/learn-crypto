import cryptoFn from "../findHash";

// button does the hashing. takes a string of data.
// returns to parent an array [ data, hash ]

const HashButton = ({ nonce, data, handleArray }) => {

  const handleClick = () => {
    // hash data using SHA-256
    const hashedData = cryptoFn.hashData(`${nonce} ${data}`)

    // if data is empty, let user know
    if (data === '') {
      data = '[empty input]'
    }

    // include input and output data in array
    const inputOutputArray = [ data, hashedData ]

    // return to parent to handle
    handleArray(inputOutputArray)

  }

  return (
    <button onClick={handleClick} className='hasherButton'>generate hash</button>
  )
}

export default HashButton