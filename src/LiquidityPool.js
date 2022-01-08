import PageLayout from './PageLayout'
import { useParams } from "react-router-dom";
import InfoBox from './InfoBox';
import HoverSelector from './HoverSelector';
import Dialogue from './Dialogue';
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
  const dialogue = dialogues['liquidity_pool']
  return (
    <PageLayout>
      <div className='flex w-info-box flex-col'>
        <Dialogue persona={dialogue.persona} message={dialogue.message} />
        <InfoBox className={"flex-col justify-center items-center space-y-4 flex-1"}>
          <div className="flex w-full">
            <div className="flex-1 text-center flex flex-col space-y-4">
              <div>Pair</div>
              <div>{pair}</div>
            </div>
            <div className="flex-1 text-center flex flex-col space-y-4">
              <div>Liquidity</div>
              <div>
                {pool.liquidity}
                <div>{pool.value}</div>
              </div>

            </div>
            <div className="flex-1 text-center flex flex-col space-y-4">
              <div>APY</div>
              <div>{pool.apr}</div>
            </div>
          </div>
        </InfoBox>

        <InfoBox className="my-4 flex-col">
          <HoverSelector to={`/liquidity_pools/${pair}/add`}>Add</HoverSelector>
          <HoverSelector to={`/liquidity_pools/${pair}/remove`}>Remove</HoverSelector>
          <HoverSelector to={`/liquidity_pools`}>Back</HoverSelector>
        </InfoBox>
      </div>
    </PageLayout>
  )
};