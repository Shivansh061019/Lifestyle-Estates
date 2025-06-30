import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Neighborhoods from "./pages/Neighborhoods";
import Contact from "./pages/Contact";
import HomeSearch from "./pages/HomeSearch";
import HomeValuation from "./pages/HomeValuation";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/neighborhoods" element={<Neighborhoods />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home-search" element={<HomeSearch />} />
          <Route path="/home-valuation" element={<HomeValuation />} />
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-2xl">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
