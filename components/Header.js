import React from 'react';
import logo from '../logo.svg';
import "./App.css";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-title">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My React Plan</h1>
        </div>
        <nav className="App-menu">
        </nav>
      </header>
    </div>
  );
}

export default Header;
