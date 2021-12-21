const DifficultyHasherTable = ({ difficultyNonceHashArray }) => {
  /* [input, hash] array */
  return (
    <div className='overflow'>
      <table className="hasherTable">
        <thead>
          <tr>
            <th>difficulty</th>
            <th>nonce</th>
            <th>hash</th>
          </tr>
        </thead>
        <tbody>
          {difficultyNonceHashArray
            ? difficultyNonceHashArray.map((arr, i) => (
                <tr key={i}>
                  <td>{arr[0]}</td>
                  <td>{arr[1]}</td>
                  <td>{arr[2]}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default DifficultyHasherTable;
