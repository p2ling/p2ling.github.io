import PageLayout from './PageLayout'
import Dialogue from './Dialogue';
import dialogues from './models/dialogues';
import { Link } from "react-router-dom"

export default function BarginHunter() {
  const dialogue = dialogues['bonds'];
  return (
    <PageLayout>
      <Dialogue persona={dialogue.persona} message={dialogue.message} />
      <div className="flex space-x-8 w-info-box flex-col">
        <div className=" flex flex-col space-y-4">
          <div className="flex flex-col justify-center items-center p-8 bg-gray-backgroundLight ">
            <div>
              wrBTC Market Price
            </div>
            <div>
              1.1528 BTC
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 bg-gray-backgroundLight space-y-4 flex-1">
            <div className="flex justify-between items-center">
              <div className="w-1/4">Green Bond</div>
              <div className="w-2/5">1.0010 BTC (+13.2%)</div>
              <Link to="/bonds/green">
                <button className="bg-gray-backgroundDark text-white rounded-md px-12 py-2">
                  View
                </button>
              </Link>
            </div>

            <div className="flex justify-between items-center">
              <div className="w-1/4">Red Bond</div>
              <div className="w-2/5">1.0916 BTC (+5.3%)</div>
              <Link to="/bonds/red">
                <button className="bg-gray-backgroundDark text-white rounded-md px-12 py-2">
                  View
                </button>
              </Link>
            </div>

            <div className="flex justify-between items-center">
              <div className="w-1/4">Blue Bond</div>
              <div className="w-2/5">1.0916 BTC (+5.3%)</div>
              <Link to="/bonds/blue">
                <button className="bg-gray-backgroundDark text-white rounded-md px-12 py-2">
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout >
  )
}