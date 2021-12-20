const Hasher = ({ handleOnChange, handleSubmit, value, inputHashArr }) => {
  return (
    <>
      <form className='hasherForm' onSubmit={handleSubmit}>
        <textarea className='hasherInput' onChange={handleOnChange} value={value}></textarea>
        <button className='hasherButton' type="submit">generate hash</button>
      </form>
    </>
  );
};

export default Hasher;
