const Transaction = ({ date, sender, recipient, id, amount, className, denom }) => {
  return (
    <div className={className}>
      <div><b>Transaction {id}</b></div>
      <div>Sender: {sender}</div>
      <div>Recipient: {recipient}</div>
      <div>Amount: {amount} {denom}</div>
      <div>Date: {date}</div>
    </div>
  )
}

export default Transaction