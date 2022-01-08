import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import Bonds from './Bonds';
import InfoCenter from './InfoCenter';
import Bond from "./Bond"
import BondMint from './BondMint';
import BondRedeem from './BondRedeem';
import LiquidityPools from './LiquidityPools';
import LiquidityPool from './LiquidityPool';
import LiquidityPoolAdd from './LiquidityPoolAdd';
import LiquidityPoolRemove from './LiquidityPoolRemove';
import Swap from './Swap';
import Accumulators from './Accumulators';
import Accumulator from './Accumulator';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bonds" element={<Bonds />} />
        <Route path="/info_center" element={<InfoCenter />} />

        <Route path="/bonds/:bondName" element={<Bond />} />
        <Route path="/bonds/:bondName/mint" element={<BondMint />} />
        <Route path="/bonds/:bondName/redeem" element={<BondRedeem />} />

        <Route path="/liquidity_pools" element={<LiquidityPools />} />
        <Route path="/liquidity_pools/:pair" element={<LiquidityPool />} />
        <Route path="/liquidity_pools/:pair/add" element={<LiquidityPoolAdd />} />
        <Route path="/liquidity_pools/:pair/remove" element={<LiquidityPoolRemove />} />


        <Route path="/swap" element={<Swap />} />
        <Route path="/accumulators" element={<Accumulators />} />
        <Route path="/accumulators/:accumulator" element={<Accumulator />} />

      </Routes>
    </div>
  );
}

export default App;
