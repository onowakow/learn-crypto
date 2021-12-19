import ProtoTransaction from "../components/ProtoTransaction";
import Spacer from '../components/Spacer'
const BlockchainPage = () => {
  return (
    <div class="page">
      <div class="interpretation">
        [the purpose of this page is to introduce the concept of blockchain]
      </div>
      <div class="demonstration">
        <div id="demoBlockchain">
          <ProtoTransaction
            id="protoScheme"
            prevHash="prev hash"
            hash="hash"
            data="data"
          />
          {/* Spacer is a simple comp. A dashed line. */}
          <Spacer />
          <ProtoTransaction prevHash={3874} hash={8273} data="11/21/21 $2" />
          <Spacer />
          <ProtoTransaction prevHash={8271} hash={1982} data="11/22/21 $5" />
          <Spacer />
          <ProtoTransaction prevHash={1982} hash={3428} data="11/22/21 $1" />
          <Spacer />
          <ProtoTransaction prevHash={3428} hash={9657} data="11/23/21 $3" />
        </div>
      </div>
    </div>
  );
};

export default BlockchainPage;
