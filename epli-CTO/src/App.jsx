import React from "react";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import NavBar from "./components/Navbar";
import Home from "./pages/home";
import MacbookAir from "./pages/macbookAir";
import MacbookPro from "./pages/macbookPro";
import Imac from "./pages/iMac";
import Mac_Mini from "./pages/macMini";
import MacPro from "./pages/macPro";
import MacStudio from "./pages/macStudio";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-content">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/macbook-air" element={<MacbookAir />} />
            <Route path="/macbook-pro" element={<MacbookPro />} />
            <Route path="/imac" element={<Imac />} />
            <Route path="/mac-mini" element={<Mac_Mini />} />
            <Route path="/mac-studio" element={<MacStudio />} />
            <Route path="/mac-pro" element={<MacPro />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
