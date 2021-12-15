const HasherComplexInput = ({ data, handleHashData, resetSim }) => {
  return (
    <>
    <div className="hasherForm">
      <div className="hasherInput">{data}</div>
      <button onClick={handleHashData} className='hasherButton'>generate hash</button>
    </div>
    <button onClick={resetSim} id='resetHasherButton' className='hasherButton'>reset simulation</button>
    </>
  );
};

export default HasherComplexInput;
