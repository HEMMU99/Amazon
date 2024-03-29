import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { Triangle } from "react-loader-spinner";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="app">
          <Triangle
            visible={true}
            height="180"
            width="180"
            color="#f0c14b"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/Amazon-clone/" element={<Home />} />
            <Route path="/Amazon-clone/checkout" element={<Checkout />} />
            <Route path="/Amazon-clone/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
export default App;
