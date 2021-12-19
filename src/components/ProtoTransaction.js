/* ProtoTransaction is not quite a transaction. Its setup is far simpler.
 it also includes prev hash to make reading simpler. These
 training wheels will eventually come off */

const ProtoTransaction = ({prevHash, data, hash, id}) => {
  return (
    <div id={id} className='protoTransaction'>
      <p className='hash'>{hash}</p>
      <div className='protoData'>
        <p className='data'>{data}</p>
      </div>
      <p className='hash'>{prevHash}</p>
    </div>
  );
};

export default ProtoTransaction;
