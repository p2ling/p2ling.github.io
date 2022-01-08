import PageLayout from './PageLayout'
import { useParams } from "react-router-dom";
import InfoBox from './InfoBox';
import HoverSelector from './HoverSelector';

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
  return (
    <PageLayout>
      <div className='flex w-info-box flex-col'>
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

        <InfoBox className={"flex-col items-center flex-1 my-4"}>
          <div className="flex w-info-box-inner items-center py-8">
            <div className="flex px-8 justify-end relative flex-1">
              <div className="absolute right-6 top-0 z-2 text-black rounded-md px-3 py-1 text-sm" style={{ "transform": "translateY(-100%)" }}>Available 0.0025 BTC</div>
              <label htmlFor="mintBondInput" className="flex items-center justify-end relative w-full">
                <input id="mintBondInput" className="w-full rounded-lg h-12 focus:outline-0 p-4" placeholder="Amount" />
                <button className="absolute right-2 z-1 bg-gray-backgroundDark text-white rounded-md px-3 py-1" style={{ transform: "translateX(-100%)" }}>Half</button>
                <button className="absolute right-2 z-1 bg-gray-backgroundDark text-white rounded-md px-3 py-1">Max</button>
              </label>
            </div>
          </div>
          <button className="bg-gray-backgroundDark text-white rounded-md px-12 py-2 mb-8">
            Remove Liquidity
          </button>
        </InfoBox>

        <InfoBox className="my-4 flex-col">
          <HoverSelector active="true" to={`/liquidity_pools/${pair}`}>Back</HoverSelector>
        </InfoBox>
      </div>
    </PageLayout>
  )
};