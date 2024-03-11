import React from 'react';
import './App.css';
import HolbertonLogo from './Holberton Logo.jpg';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HolbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
       <p>{getFooterCopy(false)}</p>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
