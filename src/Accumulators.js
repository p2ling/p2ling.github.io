import PageLayout from './PageLayout'
import InfoBox from './InfoBox';
import Dialogue from './Dialogue';
import dialogues from './models/dialogues';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import info from "./assets/info.png"

const accumulators = {
  "Gold BTC Accumulator": "25.1%",
  "Silver BTC Accumulator": "9.6%",
  "Bronze BTC Accumulator": "2.2%",
};

export default function Accumulators() {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <PageLayout>
      <div className='flex w-info-box flex-col'>
        {
          showInfo ? <Dialogue persona={dialogues['accumulators/info'].persona} message={dialogues['accumulators/info'].message} />
            : <Dialogue persona={dialogues['accumulators'].persona} message={dialogues['accumulators'].message} />
        }

        <InfoBox className={"flex-col justify-center items-center space-y-4 flex-1"}>
          <div className="flex w-full justify-between">
            <div className=" text-center flex flex-col space-y-4 w-96">
              <div>Name</div>
            </div>
            <button className=" flex flex-1 items-center space-x-2 justify-center" onClick={() => setShowInfo(!showInfo)}>
              <div>APR</div>
              <img src={info} className="h-6" alt="refresh" />
            </button>

            <div className=" text-center flex flex-col space-y-4 flex-1"></div>
          </div>
          <div className="flex w-full flex-col justify-between space-y-4">
            {
              (Object.keys(accumulators)).map((a) => <div key={a} className='flex w-full'>
                <div className='flex w-96 items-center'>
                  {a}
                </div>
                <div className='flex justify-center flex-1 items-center'>
                  {accumulators[a]}
                </div>
                <div className='flex-1 flex items-center justify-end'>
                  <Link active="true" to={`/accumulators/${a}`} className="bg-gray-backgroundDark px-6 py-2 text-white">View</Link>
                </div>
              </div>)
            }
          </div>
        </InfoBox>
      </div>
    </PageLayout >
  )
};