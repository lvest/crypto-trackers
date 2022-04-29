import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Chart from "./pages/Chart";
import Coin from "./pages/Coin";
import Home from "./pages/home/Home";
import Price from "./pages/Price";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:coinId" element={<Coin />}>
          <Route path="/:coinId/price" element={<Price />}></Route>
          <Route path="/:coinId/chart" element={<Chart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
