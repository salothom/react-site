import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sarah Lois Thompson
        </p>
        <a
          className="App-link"
          href="https://sarahloisthompson.com"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Check it out.
        </a>
        <a
          className="App-link"
          href="https://sarahloisthompson.com/home"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Angular Site.
        </a>
      </header>
    </div>
  );
}

export default App;
