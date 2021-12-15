import Transaction from "../components/Transaction";
import { Link } from "react-router-dom";

const transactions = [
  {
    className: "ledgerDemoTransaction",
    date: "12/3/21",
    sender: "Casey",
    recipient: "Owen",
    amount: "10",
    denom: "friendcoin",
  },
  {
    className: "ledgerDemoTransaction",
    date: "12/4/21",
    sender: "Owen",
    recipient: "Dax",
    amount: "15",
    denom: "friendcoin",
  },
  {
    className: "ledgerDemoTransaction",
    date: "12/4/21",
    sender: "Dax",
    recipient: "Casey",
    amount: "10",
    denom: "friendcoin",
  },
];
/* further explanation on currency.

<p>If you are having a hard time understanding why currency does not need
            inherent value, consider the following. If you and a partner share 
            grocery bills, which is more important to you: that after buying groceries,
            your partner immediately compensates you? Or that <em>over time</em> the
            amount each of you spend on groceries remains roughly equivalent?
          </p> */

const LedgerPage = () => {
  return (
    <div id="ledgerPage" className="page">
      <div id="ledgerInterpretation" className="interpretation">
        <h2>Ledgers</h2>
        <p>
          Remember that bitcoin is a ledger at its simplest. Ledgers track
          transactions between people over time. Instead of exchanging currency
          for each trade, people can record their transactions in a{" "}
          <em>ledger</em>.
        </p>
        <p>
          Ledgers, like currency, track value exchange. They are also similar to
          currency in that the units of trade (dollars, precious metals, rare
          nuts) are arbitrary to the system, so long as the users of the ledger
          trust that the ledger itself is not being fradulently modified.
        </p>
        <p>
          Below is an example of a ledger, made between the three neighbors.
        </p>
      </div>
      <div id="ledgerDemonstration" className="demonstration">
        <p>
          Casey, Dax, and Owen decide to call the currency of their ledger
          <em> friendcoin</em>. The three initialize the currency by
          distributing 150 coins between themselves.
        </p>
        <p>
          The coin has value because the three have designated it the currency
          of neighborly trade, they all have things to trade, and they all trust
          the shared ledger. (Currency creation is usually more complex at
          larger scales. There are plenty of resources online if this subject
          interests you.)
        </p>
        <div id="ledgerFlexbox">
          <div id="ledger">
            <div
              style={{ 
                border: "2px solid #24305E",              
              }}
              className="ledgerDemoTransaction"
            >
              <div>
                <b>Initial balance</b>
              </div>
              <div>Casey: 50 friendcoin</div>
              <div>Owen: 50 friendcoin</div>
              <div>Dax: 50 friendcoin</div>
            </div>

            {transactions.map((transaction, i) => {
              return (
                <Transaction
                  className={transaction.className}
                  date={transaction.date}
                  sender={transaction.sender}
                  recipient={transaction.recipient}
                  amount={transaction.amount}
                  denom={transaction.denom}
                  id={i}
                  key={i}
                />
              );
            })}
          </div>
          <div id="ledgerExplanation" className="demonstration">
            <p style={{ marginTop: 0 }}>
              This ledger works fine on a small, neighborly scale. Casey, Dax,
              and Owen may use the ledger primarily to see that their exchanges
              are roughly equivalent. Fraud would be unlikely given the
              neighbor's friendship. At larger scales, such a trust system
              quickly falters.
            </p>
            <p>
              <b>Bitcoin is a single shared ledger. </b> Bitcoin is used around the world
              by millions of strangers, trading under pseudonyms, with each coin 
              worth upwards of $50k (at the time of writing). Despite this, the ledger is 
              nearly impossible to defraud due to key design properties.
            </p>
            <p>Much of this application will explore how bitcoin makes a world-wide ledger
              possible. 
            </p>
            <Link to='/problemswithledgers'>
              <button id="ledgerNextPageBtn" className='btn-span'>Onward!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedgerPage;
