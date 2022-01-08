import PageLayout from './PageLayout'
import { useParams } from "react-router-dom";
import InfoBox from './InfoBox';
import HoverSelector from './HoverSelector';
import Dialogue from './Dialogue';
import { useState } from 'react';
import dialogues from './models/dialogues';

const pools = {
  "BTC-wrBTC": { liquidity: "25.2941 BTC", value: "$1,250,568", apr: "268.8%" },
  "wrBTC-USDC": { liquidity: "3.2942 BTC", value: "$450,581", apr: "581.1%" },
  "wrBTC-BTCA1": { liquidity: "10.8192 BTC", value: "$581,781", apr: "23.5%" },
  "wrBTC-BTCA2": { liquidity: "2.2941 BTC", value: "$325,891", apr: "58.2%" },
  "wrBTC-BTCA3": { liquidity: "8.8192 BTC", value: "$981,735", apr: "18.6%" },
};


export default function LiquidityPool() {
  const { pair } = useParams()
  const pool = pools[pair]

  const [dialogue, setDialogue] = useState(dialogues['liquidity_pool/add'])

  const addLiquidity = () => {
    setDialogue(dialogues['liquidity_pool.add.success'])
    setTimeout(() => setDialogue(dialogues['liquidity_pool']), 8000)
  }

  return (
    <PageLayout>
      <div className='flex w-info-box flex-col'>
        <Dialogue persona={dialogue.persona} message={dialogue.message} />
        <InfoBox className={"flex-col justify-center items-center space-y-4 flex-1 mb-4"}>
          <div className="flex w-full">
            <div className="flex-1 text-center flex flex-col space-y-2">
              <div>Pair</div>
              <div className="text-lg">{pair}</div>
            </div>
            <div className="flex-1 text-center flex flex-col space-y-2">
              <div>Liquidity</div>
              <div className="text-lg">
                {pool.liquidity}
                <div className="text-sm text-gray-600 mt-1">{pool.value}</div>
              </div>

            </div>
            <div className="flex-1 text-center flex flex-col space-y-2">
              <div>APY</div>
              <div className="text-lg">{pool.apr}</div>
            </div>
          </div>
        </InfoBox>

        <InfoBox className={"flex-col items-center space-y-6 flex-1 my-4 "}>
          <div className="flex w-info-box-inner items-center w-full">
            <div className="flex items-center space-x-8">
              <div className="text-white rounded-full bg-gray-backgroundDark w-20 h-20 flex items-center justify-center">
                50%
              </div>
              <div>BTC</div>
            </div>

            <div className="flex justify-end relative flex-1">
              <div className="absolute top-0 z-2 text-black rounded-md px-3 py-1 text-sm" style={{ "transform": "translateY(-100%)" }}>Available 0.0025 BTC</div>
              <label htmlFor="mintBondInput" className="flex items-center justify-end relative w-input">
                <input id="mintBondInput" className="w-full rounded-lg h-12 focus:outline-0 p-4" placeholder="Amount" />
                <button className="absolute right-2 z-1 bg-gray-backgroundDark text-white rounded-md px-3 py-1 cursor-pointer">Max</button>
              </label>
            </div>
          </div>

          <div className="flex w-info-box-inner items-center w-full">
            <div className="flex items-center space-x-8">
              <div className="text-white rounded-full bg-gray-backgroundDark w-20 h-20 flex items-center justify-center">
                50%
              </div>
              <div>wrBTC</div>
            </div>

            <div className="flex justify-end relative flex-1">
              <div className="absolute top-0 z-2 text-black rounded-md px-3 py-1 text-sm" style={{ "transform": "translateY(-100%)" }}>Available 0.0025 wrBTC</div>
              <label htmlFor="mintBondInput" className="flex items-center justify-end relative w-input">
                <input id="mintBondInput" className="w-full rounded-lg h-12 focus:outline-0 p-4" placeholder="Amount" />
                <button className="absolute right-2 z-1 bg-gray-backgroundDark text-white rounded-md px-3 py-1 cursor-pointer">Max</button>
              </label>
            </div>
          </div>

          <button onClick={() => addLiquidity()} className="bg-gray-backgroundDark text-white rounded-md px-12 py-2 self-end">
            Add Liquidity
          </button>
        </InfoBox>

        <InfoBox className="my-4 flex-col">
          <HoverSelector active="true" to={`/liquidity_pools/${pair}`}>Back</HoverSelector>
        </InfoBox>
      </div>
    </PageLayout>
  )
};