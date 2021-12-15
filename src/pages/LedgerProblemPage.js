const LedgerProblemPage = () => {
  return (
    <>
    <div id="ledgerProblemPage" className="page">
      <div id="ledgerProblemDemonstration" className="demonstration">
        <h2>Problems with ledgers</h2>
        <p>
          The ledger in the first example could be so simple because the
          neighbors trusted each other.{" "}
        </p>
        <p>
          All it takes to defraud a ledger like the last one is to delete a
          transaction.
        </p>
        <p>
          Interact with the ledger on the right by deleting a transaction and
          see how the totals change.
        </p>
      </div>
      <div id="ledgerProblemInterpretation" className="interpretation">
        a ledger with a delete button. Looks like the ledgers used in 
        further examples. A delete button allows the user to modify a list.
        The list is stored as a state, specifically for this slide. There
        will also be a 'master list', where a list of transactions is kept.

        We'll need to come up with a block to show the transactions. Or maybe not.
        it may suffice to keep one transaction per block for our purposes.
      </div>
    </div>
    </>
  );
};

export default LedgerProblemPage;
