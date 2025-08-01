//import { useState } from "react";
//import { invoke } from "@tauri-apps/api/core";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../index.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Settings from "./pages/Settings";

const App = () => {
  return (
      <Router>
          <div className="flex h-screen">
            <Navbar />
              <div className="flex-1 pl-14 bg-neutral-800 text-white overflow-auto">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
              </div>
          </div>
      </Router>
  )
}

export default App;
