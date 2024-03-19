// task_1/dashboard/src/App.js
import React from 'react';
import './App.css';
import logo from './Holberton Logo.jpg';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo-section">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Dashboard-title">School Dashboard</h1>
        </div>
        <hr className="Divider" />
      </header>
      <div className="App-body">
        <p className="Login-message">Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <hr className="Divider" />
        <p className="Copyright">{getFooterCopy(false)} - {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

