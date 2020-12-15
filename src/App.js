import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './happy-green-face-hi.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HappyFace</h1>
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}

export default App;
