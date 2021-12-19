const Hasher = ({ handleOnChange, handleSubmit, value, inputHashArr }) => {
  return (
    <>
      <form className='hasherForm' onSubmit={handleSubmit}>
        <textarea className='hasherInput' onChange={handleOnChange} value={value}></textarea>
        <button className='hasherButton' type="submit">generate hash</button>
      </form>
      <table className="hasherTable">
        <thead>
          <tr>
            <th>data</th>
            <th>hash</th>
          </tr>
        </thead>
        <tbody>
          {inputHashArr
            ? inputHashArr.map((arr, i) => (
                <tr key={i}>
                  <td style={{width: '40%'}}>{arr[0]}</td>
                  <td style={{width: '60%'}}>{arr[1]}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
};

export default Hasher;
