import PageLayout from './PageLayout'
import HoverSelector from './HoverSelector';
import InfoBox from './InfoBox';
import { useParams } from 'react-router-dom';
import Dialogue from './Dialogue';
import dialogues from './models/dialogues'
import { useState } from 'react';

export default function BondMint() {
  const { bondName } = useParams();
  const [dialogue, setDialogue] = useState(dialogues['bonds'])

  return (
    <PageLayout>
      <InfoBox className={"flex-col w-info-box justify-center items-center space-y-2"}>
        <Dialogue persona={dialogue.persona} message={dialogue.message} />
        <div className="text-lg">Green Bond</div>
        <div className="flex justify-between w-info-box-inner">
          <div className='text-center'><span className="text-sm">BTCA Market Price</span> <br /> 1.1528 BTC</div>
          <div className='text-center'><span className="text-sm">Bond Price</span> <br /> 1.1528 BTC</div>
          <div className='text-center'><span className="text-sm">ROI </span><br /> 13.2% </div>
        </div>
      </InfoBox>
      <InfoBox className="my-4 justify-center w-info-box">
        <label htmlFor="mintBondInput" className="flex items-center justify-center w-info-box-inner relative">
          <input id="mintBondInput" className="flex rounded-lg h-10 focus:outline-0 p-2 flex-1 " placeholder="Amount" />
          <div className="absolute right-2 z-1 bg-gray-backgroundDark text-white rounded-md px-3 cursor-pointer">Max</div>
        </label>
      </InfoBox>
      <InfoBox className="my-4 justify-center w-info-box flex-col items-center">
        <div className="flex justify-between w-info-box-inner">
          <div>Your Balance</div>
          <div>0.0252 BTC</div>
        </div>

        <div className="flex justify-between w-info-box-inner">
          <div>You Will Get</div>
          <div>0.0123 wrBTC</div>
        </div>

        <div className="flex justify-between w-info-box-inner">
          <div>Max You Can Buy</div>
          <div>0.0123 BTCA</div>
        </div>

        <div className="flex justify-between w-info-box-inner">
          <div>Vesting Term</div>
          <div>7 Days</div>
        </div>


        <div className="flex justify-between w-info-box-inner">
          <div>Minimum Purchase</div>
          <div>0.001 BTCA</div>
        </div>

        <button onClick={() => setDialogue(dialogues['bonds/mint/success'])} className="bg-gray-backgroundDark text-white rounded-md px-12 py-2 mt-6">
          Mint
        </button>
      </InfoBox>

      <InfoBox>
        <HoverSelector active="true" to={`/bonds/${bondName}`}>Back</HoverSelector>
      </InfoBox>
    </PageLayout >
  )
}