const Hasher = ({ handleOnChange, handleSubmit, value, inputHashArr }) => {
  return (
    <div className="hasher">
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} value={value}></input>
        <button type="submit">hash data</button>
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
                  <td>{arr[0]}</td>
                  <td>{arr[1]}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Hasher;
