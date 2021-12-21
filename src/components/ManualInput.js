const ManualInput = ({ handleChange, value }) => {

  return (
    <form className='hasherForm'>
      <textarea className='hasherInput' value={value} onChange={handleChange}></textarea>
    </form>
  )
}

export default ManualInput