import Hasher from '../components/Hasher'
import { useState } from 'react'
import hashData from '../findHash'
import { Container, Row, Col } from 'react-bootstrap'
import Ledger from '../components/Ledger'
import HasherTable from '../components/HasherTable'

const SimpleHashPage = () => {
  // Array contains arrays of [input, output]
  const [inputHashArr, setInputHashArr] = useState([
    ['some sample data.', '2cf7ebb33521297e4a78c294e6a362a256d915140b7b440b7fcdd7f4abd2087b'],
    ['12/15/21 12:31 PM', '82b08343a9a38c4b99f7d4973be2eef8bb7778fd9231262c75bcae673336a499']
  ])

  const [inputValue, setInputValue] = useState('')

  /* This section looks a little silly, but it lets me reuse
    components used later in the app
  */
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
        "0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89",
    },]
  
    const transaction = transactions[0]
  
    const transactionData = `${transaction.prevHash}
  ${transaction.date}
  ${transaction.sender}
  ${transaction.recipient}
  ${transaction.amount}`

  

  const handleClick = () => {
    setInputValue(transactionData)
  }
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  // hashes data and populates table (table found in Hasher)
  const handleHashSubmit = (event) => {
    event.preventDefault()

    const hashedInput = hashData(inputValue)

    let storedInput = inputValue

    if (inputValue === '') {
      storedInput = '[empty input]'
    }

    // shorten input
    if (inputValue.length > 18) {
      storedInput = inputValue.slice(0,18).concat('...')
    }
    const inputHashedPair = [storedInput, hashedInput]

    // Clear input value
    setInputValue('')

    // copy of state inputHashArr for slicing if over sized.
    let inputHashArrCopy = inputHashArr

    // slice first pair off to maintain size.
    if (inputHashArr.length > 9) {
      inputHashArrCopy = inputHashArr.slice(1) 
    }
    setInputHashArr(inputHashArrCopy.concat([inputHashedPair]))
  }

  return (
    <>
    <Container className="page" fluid='md'>
      <Row className='justify-content-center'>
        <Col className="interpretation" lg='9'>
          [Simple hash iteractive][Will explain how hashing works]
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className='demonstration' lg='9'>
          {/* table lives in hasher comp.  */}
        <Hasher 
          handleOnChange={handleInputChange} 
          handleSubmit={handleHashSubmit} 
          value={inputValue}
          inputHashArr={inputHashArr}
        />
        <HasherTable inputHashArr={inputHashArr} />
        <Ledger
            transactions={transactions}
          />
        <button onClick={handleClick}>set input value</button>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default SimpleHashPage;
