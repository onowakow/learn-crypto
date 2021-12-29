const FormInput = ({ data }) => {
  /* {
      prevHash
      date
      sender
      recipient
      amount
    } */

  return (
    <form className="inputForm">
      <label for="prevHash">Previous Hash:</label>
      <input type="text" name="prevHash" value={data.prevHash} readonly/>
    </form>
  );
};

export default FormInput;
