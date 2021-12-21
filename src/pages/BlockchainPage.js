import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import HasherPropInput from '../components/HasherPropInput'
import HasherKeyInputWithButton from '../components/HasherKeyInputWithButton'
import HasherTable from '../components/HasherTable'
import HashButton from '../components/HashButton'
import NonceIncButton from '../components/NonceIncButton'

const ManualInput = ({handleChange}) => {

  return (
    <form className='hasherForm'>
      <textarea className='hasherInput' onChange={handleChange}></textarea>
    </form>
  )
}


const BlockchainPage = () => {
  const [ tableData, setTableData ] = useState([])
  const [ nonce, setNonce ] = useState(0)
  const [ input, setInput ] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  console.log(input)

  const incrementNonce = () => {
    setNonce(nonce + 1)
  }

  const handleArray = (array) => {
    setTableData(tableData.concat(array))
  }

  console.log(nonce)

  const transactionData = `0000718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89
  ${new Date(2021, 3, 21, 8, 24, 1).toString()}
  ${243}
  ${163}
  ${0.0012}`

  return (
    <Container className="page">
      <Row className='justify-content-center'>
        <Col className="interpretation" lg='9'>
        [the purpose of this page is to introduce the concept of blockchain]
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className="demonstration" lg='9'>
          <p>ManualInput</p>
          <ManualInput handleChange={handleChange} />
          <p>HasherKeyInputWithButton</p>
          <HasherKeyInputWithButton />
          <p>HasherPropInput</p>
          <HasherPropInput data={transactionData} />
          <p>HashButton</p>
          <HashButton handleArray={handleArray} data={transactionData} />
          <p>NonceIncButton</p>
          <NonceIncButton nonce={nonce} incrementNonce={incrementNonce} />
          <p>HasherTable</p>
          <HasherTable inputHashArray={tableData} />
        </Col>
      </Row>
    </Container>
  );
};

export default BlockchainPage;
