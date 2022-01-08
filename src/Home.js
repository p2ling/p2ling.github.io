import { Link } from "react-router-dom";
import Dialogue from "./Dialogue";
import dialogues from "./models/dialogues";

function NPCButton(props) {
  return <button className={"cursor-pointer py-4 px-6 w-48 bg-gray-backgroundLight border-2 hover:border-gray-500 flex items-center justify-center " + props.className
  }>
    {props.children}
  </button>
}

export default function Home() {
  return <div className="flex flex-col items-center justify-center py-8 min-h-screen">
    <Dialogue persona={dialogues['home'].persona} message={dialogues['home'].message} />
    <div className="flex my-4">
      <Link to="/dashboard"><NPCButton className="w-72">Dashboard</NPCButton></Link>
    </div>
    <div className="flex space-x-72 my-8">
      <div className="flex flex-col py-4 space-y-4">
        <Link to="/liquidity_pools"><NPCButton className="translate-x-1/3">Prospero the Provider</NPCButton></Link>
        <div className="w-72"></div>
        <Link to="/bonds">
          <NPCButton>Brigid the Bargin Hunter</NPCButton>
        </Link>
      </div>

      <div className="flex items-center">
        <Link to="/swap">
          <NPCButton>Townes the Trader</NPCButton>
        </Link>
      </div>
    </div>

    <div className="flex space-x-96 my-8">
      <div className="flex flex-col py-4 space-y-4">
        <Link to="/info_center">
          <NPCButton>Winterrose the Wise</NPCButton>
        </Link>
        <div className="w-72"></div>
      </div>

      <div className="flex items-center">
        <Link to="/accumulators">
          <NPCButton>Axelrod the Accumulator</NPCButton>
        </Link>
      </div>
    </div>
  </div>
} 