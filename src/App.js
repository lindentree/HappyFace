import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './happy-green-face-hi.png';
import './App.css';
import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import plantImage from "./plantImage.jpg";


function App() {
  const [user, setUser] = useState({ loggedIn: false });

  return (
    <div className="App">
      <LandingPage
        background={plantImage}
        title="HappyFace"
        subtitle="Recommending plants for users's mental wellbeing"
      />
      <Dashboard />
    </div>
    
  );
}

export default App;
