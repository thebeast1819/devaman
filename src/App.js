import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
