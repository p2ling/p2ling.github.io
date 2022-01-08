import InfoBox from './InfoBox'
import PageLayout from './PageLayout'
import refresh from "./assets/refresh-button.png"
import next from "./assets/next.png"
import Dialogue from "./Dialogue"
import dialogues from './models/dialogues'
import { useState, useRef } from 'react'

const options = [
  "BTC",
  "wrBTC",
  "BTCA1",
  "SOL",
  "mSOL",
]

export default function Swap(props) {
  const [showTradeOptions, setShowTradeOptions] = useState(false);
  const [showForOptions, setShowForOptions] = useState(false);
  const [tradeOption, setTradeOption] = useState(options[0]);
  const [tradeForOption, setTradeForOption] = useState(options[1]);

  const refreshEl = useRef(null)

  function selectTradeOption(option) {
    setShowTradeOptions(!showTradeOptions);
    setTradeOption(option);
  }

  function selectForOption(option) {
    setShowForOptions(!showForOptions);
    setTradeForOption(option);
  }

  function swapForAndTo() {
    setTradeForOption(tradeOption);
    setTradeOption(tradeForOption);
    refreshEl.current.classList.add('animate-spin')
    setTimeout(() => {
      refreshEl.current.classList.remove('animate-spin')
    }, 500)
  }

  return (
    <PageLayout>
      <div className="flex flex-col">
        <Dialogue persona={dialogues['trader'].persona} message={dialogues['trader'].message} />
        <InfoBox className="flex-col w-info-box-inner">
          <div className='flex justify-between text-sm'>
            <div>Trade</div>
            <div>Available 0.0025</div>
          </div>

          <div className='flex justify-between mb-4 mt-1 items-center'>
            <div className='flex flex-col'>
              <div className='flex items-center cursor-pointer' onClick={() => setShowTradeOptions(!showTradeOptions)}>
                {tradeOption}<img src={next} className={`h-4 ml-2 ${showTradeOptions ? "rotate-90" : ''}`} />
              </div>
            </div>

            <label htmlFor="tradeInput" className="flex items-center justify-center relative">
              <input id="tradeInput" type="number" min='0' className="flex rounded-lg w-96 h-10 focus:outline-0 p-2 flex-1 " placeholder="Amount" />
              <div className="absolute right-24 z-1 bg-gray-backgroundDark text-white rounded-md px-3 cursor-pointer">Half</div>
              <div className="absolute right-2 z-1 bg-gray-backgroundDark text-white rounded-md px-3 cursor-pointer">Max</div>
            </label>
          </div>

          {showTradeOptions ? <div className="flex flex-col w-1/2">
            <input placeholder="Search" className='flex rounded-lg w-96 h-10 focus:outline-0 p-2 flex-1 mb-4' />
            <div className='h-24 overflow-y-scroll flex flex-col border-2 p-2 rounded-md'>
              {options.map((o) => <div
                key={o}
                className='cursor-pointer flex justify-between'>
                <div className="flex-1" onClick={(e) => selectTradeOption(e.target.innerText)}>
                  <div>{o}</div>
                </div>
                <div className='pointer-events-none'>{Math.floor(Math.random() * 100) / 100} </div>
              </div>)}
            </div>
          </div> : []}

          <button onClick={() => swapForAndTo()} className='flex justify-center my-4'><img ref={refreshEl} src={refresh} className='h-6' /></button>

          <div className='flex justify-between text-sm items-center'>
            <div>For(estimated)</div>
            <div>Available 0.0025</div>
          </div>

          <div className='flex justify-between mb-4 mt-1 items-center space-x-48 items-center'>
            <div className='flex items-center' onClick={() => setShowForOptions(!showForOptions)}><div>{tradeForOption}</div><img src={next} className='h-4 ml-2' /></div>
            <label htmlFor="forInput" className="flex items-center justify-center relative">
              <input id="forInput" type="number" min='0' className="flex rounded-lg w-96 h-10 focus:outline-0 p-2 flex-1 " placeholder="Amount" />
            </label>
          </div>

          {showForOptions ? <div className="flex flex-col w-1/2">
            <input placeholder="Search" className='flex rounded-lg w-96 h-10 focus:outline-0 p-2 flex-1 mb-4' />
            <div className='h-24 overflow-y-scroll flex flex-col border-2 p-2 rounded-md'>
              {options.map((o) => <div
                key={o}
                className='cursor-pointer flex justify-between'>
                <div className="flex-1" onClick={(e) => selectForOption(e.target.innerText)}>
                  {o}
                </div>
                <div className='pointer-events-none'>{Math.floor(Math.random() * 3) / 100} </div>
              </div>)}
            </div>
          </div> : []}
        </InfoBox>

        <InfoBox className="flex-col my-4">
          <div className='flex justify-between'>
            <div className='flex'>Rate</div>
            <div className='flex'>1 BTC = 0.9942 wrBTC</div>
          </div>

          <div className='flex justify-between'>
            <div className='flex'>Price Impact</div>
            <div className='flex'>0.014%</div>
          </div>

          <button className="bg-gray-backgroundDark text-white rounded-md px-12 py-2 mt-6 w-fit self-end">
            Trade
          </button>
        </InfoBox>
      </div>
    </PageLayout >
  )
};