const HasherTable = ({ inputHashArray }) => {
  /* [input, hash] array */
  return (
    <div className='overflow'>
      <table className="hasherTable">
        <thead>
          <tr>
            <th>data</th>
            <th>hash</th>
          </tr>
        </thead>
        <tbody>
          {inputHashArray
            ? inputHashArray.map((arr, i) => (
                <tr key={i}>
                  <td style={{ width: "40%" }}>{arr[0]}</td>
                  <td style={{ width: "60%" }}>{arr[1]}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default HasherTable;
