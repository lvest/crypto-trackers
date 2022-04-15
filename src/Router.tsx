import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Coin from "./pages/Coin";
import Home from "./pages/home/Home";

function Router() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:coinId" element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
