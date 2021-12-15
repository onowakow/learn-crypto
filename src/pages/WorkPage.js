import { useState } from 'react'



const WorkPage = () => {
  const [string, setString] = useState('')
  const [alert, setAlert] = useState(null)
  
  var crypto = require('crypto')
  const sha256 = crypto.createHash('sha256')
  
  const handleStringChange = (event) => {
    setString(event.target.value)
  } 

  const hashString = (event) => {
    event.preventDefault()
    if (string === '') {
      setAlert('No empty inputs.')
      setTimeout(() => {
        setAlert(null)
      }, 3000)
    } else {
      const hashedString = sha256.update(string).digest('hex')
      console.log(hashedString)
      setString('')
      return hashedString
    }   
  }


  return (

    <div className='interpretation'>
      <h1>Proof of work</h1>
      <form onSubmit={hashString}>
        <input value={string} onChange={handleStringChange}></input>
        <button type='submit'>SHA-256</button>
      </form>
      {alert ? <p>{alert}</p> : null}
    </div>
  )
}

export default WorkPage