//import { useState } from "react";
//import { invoke } from "@tauri-apps/api/core";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../index.css";

import Navbar from "./components/Navbar";

import Search from "./pages/Search";
import Library from "./pages/Library";
import Settings from "./pages/Settings";
import GameInfo from "./pages/GameInfo";

const App = () => {
  return (
      <Router>
          <div className="flex h-screen">
            <Navbar />
              <div className="flex-1 pl-14 bg-neutral-900 text-white overflow-auto">
                  <Routes>
                    <Route path="/" element={<Library />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/gameinfo" element={<GameInfo />} />
                  </Routes>
              </div>
          </div>
      </Router>
  )
}

export default App;
