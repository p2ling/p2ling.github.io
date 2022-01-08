import PageLayout from './PageLayout'
import HoverSelector from './HoverSelector';
import InfoBox from './InfoBox';
import { useParams } from 'react-router-dom';
import Dialogue from './Dialogue';
import dialogues from './models/dialogues';

const bonds = {
  'green': {
    name: "Green Bond",
    bondPrice: 1.2028,
    btcaPrice: 1.0010,
    roi: 12.1,
  },
  'blue': {
    name: "Blue Bond",
    bondPrice: 1.1028,
    btcaPrice: 1.0010,
    roi: 10.2,
  },
  'red': {
    name: "Red Bond",
    bondPrice: 1.1528,
    btcaPrice: 1.0010,
    roi: 15.2,
  },
}


export default function BondPage(props) {
  const { bondName } = useParams();
  const bond = bonds[bondName]
  const dialogue = dialogues['bonds']
  return (
    <PageLayout>
      <div className="flex flex-col">
        <Dialogue persona={dialogue.persona} message={dialogue.message} />
        <div className="flex flex-col py-4 px-8 bg-gray-backgroundLight items-center justify-center">
          <div className="flex justify-center items-center">
            {bond.name}
          </div>
          <div className="flex space-x-12 justify-between my-4 text-center ">
            <div className="flex flex-col">
              <div className="text-sm">BTCA Market Price</div>
              <div>{bond.bondPrice} BTC</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm">Bond Price</div>
              <div>{bond.btcaPrice} BTC</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm">ROI</div>
              <div>{bond.roi}%</div>
            </div>
          </div>
        </div>
        <InfoBox className="my-4 flex-col">
          <HoverSelector to={`/bonds/${bondName}/mint`}>Mint</HoverSelector>
          <HoverSelector to={`/bonds/${bondName}/redeem`}>Redeem</HoverSelector>
          <HoverSelector to="/bonds">Back</HoverSelector>
        </InfoBox>
      </div>
    </PageLayout >
  )
};

BondPage.defaultProps = {
  name: "Loading..",
  bondPrice: 0,
  btcaPrice: 0,
  roi: 0,
};