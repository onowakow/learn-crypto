import Hasher from '../components/Hasher'
import { useState } from 'react'
import hashData from '../findHash'


const SimpleHashPage = () => {
  // Array contains arrays of [input, output]
  const [inputHashArr, setInputHashArr] = useState([
    ['some sample data', '2cf7ebb33521297e4a78c294e6a362a256d915140b7b440b7fcdd7f4abd2087b'],
    ['12/15/21 12:31 PM', '82b08343a9a38c4b99f7d4973be2eef8bb7778fd9231262c75bcae673336a499']
  ])
  const [inputVal, setInputVal] = useState('')

  const handleInputChange = (event) => {
    setInputVal(event.target.value)
  }

  const handleHashSubmit = (event) => {
    event.preventDefault()
    const inputHashedPair = [inputVal, hashData(inputVal)]

    // copy of state inputHashArr for slicing if over sized.
    let inputHashArrCopy = inputHashArr

    // slice first pair off to maintain size.
    if (inputHashArr.length > 9) {
      inputHashArrCopy = inputHashArr.slice(1) 
    }
    setInputHashArr(inputHashArrCopy.concat([inputHashedPair]))
  }

  console.log(inputHashArr)
  return (
    <>
    <div id="ledgerProblemPage" className="page">
      <div id="ledgerProblemInterpretation" className="interpretation">
        [Simple hash iteractive][Will explain how hashing works]
      </div>
      <div id="ledgerProblemDemonstration" className="demonstration">
        <h2>Hashing</h2>
        <Hasher 
          handleOnChange={handleInputChange} 
          handleSubmit={handleHashSubmit} 
          value={inputVal}
          inputHashArr={inputHashArr}
        />
      </div>
    </div>
    </>
  );
};

export default SimpleHashPage;
