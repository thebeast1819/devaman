import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App" >
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
