import React from 'react';
import './App.css';
import logo from './Holberton Logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notifications />
        <div className="Logo-section">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Dashboard-title">School Dashboard</h1>
        </div>
        <hr className="Divider" />
      </header>
      <div className="App-body">
        <p className="Login-message">Login to access the full dashboard</p>

        {/* Wrap form fields in a div with "form-fields" class */}
        <div className="form-fields">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button>OK</button>
        </div>
      </div>
      <footer className="App-footer">
        <hr className="Divider" />
        <p className="Copyright">{getFooterCopy(false)} - {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
