import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Restaurant from "./components/restaurant/Restaurant";
import Adress from "./components/adress/Adress";
import Deliver from "./components/deliver/Deliver";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rest" element={<Restaurant />} />
        <Route path="/rest/adress" element={<Adress />} />
        <Route path="/rest/adress/deliver" element={<Deliver />} />
      </Routes>
    </>
  );
}

export default App;
