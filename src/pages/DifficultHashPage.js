import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ManualInput from '../components/ManualInput'
import AutoNonceHashButton from '../components/AutoNonceHashButton';
import DifficultyHasherTable from '../components/DifficultyHasherTable';
import ResetButton from '../components/ResetButton'

// two-fold page. Lets user manual nonce increment and auto nonce increment
const defaultTableData = [[0, 0, 'fee83545b73fe2cbad32a017b84894a65fd44fbb77cfa0564053864f1a80de8c'],
[1, 13, '0173b86325cdd9d667caf015e0817dfb61144204477476c8b294a1ad68fc322c'],
[2, 148, '00f9b047ec467be1e9da5690dfdf330b33eb73d1f2257bcabd91e244677fa2cc'] ]

const DifficultHashPage = () => {
  const [inputValue, setInputValue] = useState('')

  const [difficultyNonceHashArray, setDifficultyNonceHashArray] = useState(defaultTableData)

  const handleHashObject = (hashObj) => {
    const arr = [hashObj.difficulty, hashObj.nonce, hashObj.hash]

    let dNHACopy = difficultyNonceHashArray
    // Manage hash array size to under 20
    if (dNHACopy.length > 20) {
      dNHACopy = dNHACopy.slice(1)
    }

    setDifficultyNonceHashArray(dNHACopy.concat([arr]))
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleReset = () => {
    setDifficultyNonceHashArray(defaultTableData)
    setInputValue('')
  }

  return (
    <Container className="page">
      <Row className='justify-content-center'>
        <Col className="interpretation" lg='9'>
          I will test out sample components here for the refactor
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className="demonstration" lg='9'>
          {/* Manual input */}
          <ManualInput handleChange={handleInputChange} value={inputValue} />
          <AutoNonceHashButton
            data={inputValue}
            handleHashObject={handleHashObject} />
          {/* hash */}
          <DifficultyHasherTable 
            difficultyNonceHashArray={difficultyNonceHashArray}  
          />
          <ResetButton handleReset={handleReset}/>
        </Col>
      </Row>
    </Container>
  );
};

export default DifficultHashPage;
