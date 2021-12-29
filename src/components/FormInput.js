import { useState } from 'react'

const FormInput = ({ data, minerID, nonce, }) => {
  const [nonceDisplay, setNonceDisplay] = useState(0)
  // if nonce is not null and
  // if nonceDisplay is < nonce, wait and increment.
  if (nonce !== null) {
    if (nonceDisplay < nonce) {
      setTimeout(() => {
        setNonceDisplay(nonceDisplay + 1)
      }, 20)
    }
  }
  /* {
      prevHash
      date
      sender
      recipient
      amount
    } */
  // organize data and data name in
  const dataArray = [
    ["Previous hash", data.prevHash],
    ["Sender ID", data.sender],
    ["Recipient ID", data.recipient],
    ["Amount", data.amount],
    ["Date", data.date],
  ];

  return (
    <form className="inputForm">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4>Miner #{minerID}</h4>
        <h4>Hash criteria: 00</h4>
      </div>
      <label htmlFor="prevHash">Previous Hash:</label>
      <input type="text" name="prevHash" value={data.prevHash} readOnly />
      <div style={{fontSize: '2em', textAlign: 'center'}}>+</div>
      <label htmlFor="sender">Sender ID:</label>
      <input type="text" name="sender" value={data.sender} readOnly />
      <label htmlFor="recipient">Recipient ID:</label>
      <input type="text" name="recipient" value={data.recipient} readOnly />
      <label htmlFor="amount">Amount of bitcoin:</label>
      <input type="text" name="amount" value={data.amount} readOnly />
      <label htmlFor="date">Date:</label>
      <input type="text" name="date" value={data.date} readOnly />
      <div style={{fontSize: '2em', textAlign: 'center'}}>+</div>
      <label htmlFor="nonce">Nonce:</label>
      <input
        type="text"
        name="nonce"
        value={""}
        readOnly
        placeholder="click button below to search for nonce"
      />
      {nonceDisplay}
    </form>
  );
};

export default FormInput;
