import PageLayout from './PageLayout'
import { useParams } from "react-router-dom";
import InfoBox from './InfoBox';
import HoverSelector from './HoverSelector';
import Dialogue from './Dialogue';
import { useRef, useState } from 'react';
import dialogues from './models/dialogues';
import refresh from "./assets/refresh-button.png"

const accumulators = {
  "Gold BTC Accumulator": { index: 4.12, duration: "30", apr: "25.1%", liquidity: "56.2 BTCA1" },
  "Silver BTC Accumulator": { index: 1.62, duration: "14", apr: "9.6%", liquidity: "21.2 BTCA1" },
  "Bronze BTC Accumulator": { index: 1.12, duration: "7", apr: "2.2%", liquidity: "30.2 BTCA1" },
};

export default function LiquidityPool() {
  const { accumulator } = useParams()
  const acc = accumulators[accumulator]
  const [isUpgrade, setIsUpgrade] = useState(true)

  const refreshEl = useRef(null)

  const upgradeDowngrade = () => {
    setIsUpgrade(!isUpgrade)
    refreshEl.current.classList.add("animate-spin")
    setTimeout(() => {
      refreshEl.current.classList.remove("animate-spin")
    }, 500)
  }
  // setDialogue(dialogues['accumulators'])
  // setTimeout(() => setDialogue(dialogues['accumulators']), 8000)

  return (
    <PageLayout>
      <div className='flex w-info-box flex-col'>
        {
          isUpgrade ? <Dialogue persona={dialogues['accumulators/upgrade'].persona} message={dialogues['accumulators/upgrade'].message} /> :
            <Dialogue persona={dialogues['accumulators/downgrade'].persona} message={dialogues['accumulators/downgrade'].message} />
        }
        <InfoBox className={"flex-col justify-center items-center space-y-4 flex-1 mb-4"}>
          <div className='mb-4 text-lg'>
            {accumulator}
          </div>
          <div className="flex w-full">
            <div className="flex-1 text-center flex flex-col space-y-2">
              <div>Duration</div>
              <div className="text-lg">{acc.duration} days</div>
            </div>

            <div className="flex-1 text-center flex flex-col space-y-2">
              <div>Liquidity</div>
              <div className="text-lg">
                {acc.liquidity}
                <div className="text-sm text-gray-600 mt-1">{ }</div>
              </div>
              <div className='text-gray-300'></div>
            </div>

            <div className="flex-1 text-center flex flex-col space-y-2">
              <div>APR</div>
              <div className="text-lg">
                {acc.apr}
                <div className="text-sm text-gray-600 mt-1">{ }</div>
              </div>
            </div>


            <div className="flex-1 text-center flex flex-col space-y-2">
              <div>Index</div>
              <div className="text-lg">
                {acc.index}
                <div className="text-sm text-gray-600 mt-1">{ }</div>
              </div>
            </div>

          </div>
        </InfoBox>

        <InfoBox className={"flex-col items-center space-y-6 flex-1 my-4 "}>
          <div className="flex w-info-box-inner items-center w-full">
            <div className="flex flex-col ">
              <div className="text-xs mb-2">{isUpgrade ? "Upgrade" : "Downgrade"}</div>
              <div>{isUpgrade ? "wrBTC" : accumulator}</div>
            </div>

            <div className="flex justify-end relative flex-1">
              <div className="absolute top-0 z-2 text-black rounded-md px-3 py-1 text-sm" style={{ "transform": "translateY(-100%)" }}>Available 0.0025 BTC</div>
              <label htmlFor="mintBondInput" className="flex items-center justify-end relative w-input">
                <input id="mintBondInput" className="w-full rounded-lg h-12 focus:outline-0 p-4" placeholder="Amount" />
                <button className="absolute right-2 z-1 bg-gray-backgroundDark text-white rounded-md px-3 py-1 cursor-pointer">Max</button>
              </label>
            </div>
          </div>

          <button onClick={() => upgradeDowngrade()} className='flex justify-center py-4'><img alt="refresh" ref={refreshEl} src={refresh} className='h-6' /></button>

          <div className="flex w-info-box-inner items-center w-full">
            <div className="flex flex-col justify-center">
              <div className='text-xs mb-2'>For</div>
              <div>{!isUpgrade ? "wrBTC" : accumulator}</div>
            </div>

            <div className="flex justify-end relative flex-1">
              <div className="absolute top-0 z-2 text-black rounded-md px-3 py-1 text-sm" style={{ "transform": "translateY(-100%)" }}>Available 0.0025 wrBTC</div>
              <label htmlFor="mintBondInput" className="flex items-center justify-end relative w-input">
                <input id="mintBondInput" className="w-full rounded-lg h-12 focus:outline-0 p-4" placeholder="Amount" />
              </label>
            </div>
          </div>

          <button className="bg-gray-backgroundDark text-white rounded-md px-12 py-2 self-end">
            {isUpgrade ? "Upgrade" : "Downgrade"}
          </button>
        </InfoBox>

        <InfoBox className="my-4 flex-col">
          <HoverSelector active="true" to={`/accumulators`}>Back</HoverSelector>
        </InfoBox>
      </div>
    </PageLayout>
  )
};