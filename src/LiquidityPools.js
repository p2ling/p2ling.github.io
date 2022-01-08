import PageLayout from './PageLayout'
import { Link } from "react-router-dom";
import InfoBox from './InfoBox';
import Dialogue from "./Dialogue"
import dialogues from './models/dialogues'

const pools = [
  { pair: "BTC-wrBTC", liquidity: "25.2941 BTC", value: "$1,250,568", apr: "268.8%" },
  { pair: "wrBTC-USDC", liquidity: "3.2942 BTC", value: "$450,581", apr: "581.1%" },
  { pair: "wrBTC-BTCA1", liquidity: "10.8192 BTC", value: "$581,781", apr: "23.5%" },
  { pair: "wrBTC-BTCA2", liquidity: "2.2941 BTC", value: "$325,891", apr: "58.2%" },
  { pair: "wrBTC-BTCA3", liquidity: "8.8192 BTC", value: "$981,735", apr: "18.6%" },
];


function Pool({ pool }) {
  return (
    <div className="flex justify-between flex-1 w-full items-start">
      <div className='flex-1 text-center'>{pool.pair}</div>
      <div className='flex-1 text-center'>{pool.liquidity} <br /> <span className="text-gray-500 text-sm">{pool.value}</span> </div>
      <div className='flex-1 text-center'>{pool.apr}</div>
      <div className="flex-1 text-center">
        <Link active="true" to={`/liquidity_pools/${pool.pair}`} className="bg-gray-backgroundDark px-6 py-2 text-white">View</Link>
      </div>
    </div>
  )
};


export default function LiquidityPools() {
  const dialogue = dialogues["liquidity_pool"]
  return (
    <PageLayout>
      <div className='flex w-info-box relative'>
        <Dialogue persona={dialogue.persona} message={dialogue.message} />
        <InfoBox className={"flex-col justify-center items-center space-y-4 flex-1"}>
          <div className="flex w-full">
            <div className="flex-1 text-center">Pair</div>
            <div className="flex-1 text-center">Liquidity</div>
            <div className="flex-1 text-center">APR</div>
            <div className="flex-1 text-center"></div>
          </div>
          {pools.map(pool => {
            return (<Pool pool={pool} key={pool.pair} />)
          })}
        </InfoBox>
      </div>
    </PageLayout>
  )
};