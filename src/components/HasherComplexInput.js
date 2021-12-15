const HasherComplexInput = ({ data, handleHashData }) => {
  return (
    <form className="hasherForm">
      <textarea className="hasherInput" value={data}></textarea>
      <button onClick={handleHashData} className='hasherButton'>generate hash</button>
    </form>

  );
};

export default HasherComplexInput;
