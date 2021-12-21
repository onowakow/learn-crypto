import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ManualInput from '../components/ManualInput'
import AutoNonceHashButton from '../components/AutoNonceHashButton';
import DifficultyHasherTable from '../components/DifficultyHasherTable';

// two-fold page. Lets user manual nonce increment and auto nonce increment

const DifficultHashPage = () => {
  const [inputValue, setInputValue] = useState('')

  const [difficultyNonceHashArray, setDifficultyNonceHashArray] = useState([])

  const handleHashObject = (hashObj) => {
    const arr = [hashObj.difficulty, hashObj.nonce, hashObj.hash]
    setDifficultyNonceHashArray(difficultyNonceHashArray.concat([arr]))
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
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
          {/* Graph ? */}
          {/*  */}
        </Col>
      </Row>
    </Container>
  );
};

export default DifficultHashPage;
