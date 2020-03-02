import React from 'react';
// import logo from 'favicon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
         <a
          className="App-link"
          href="https://www.linkedin.com/in/sarahthompson3/"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Check out Linkedin.
        </a>
        <a
          className="App-link"
          href="https://sarahloisthompson.com/home"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Angular Site.
        </a>
        <h2 class="headerFooter">Sarah Lois Thompson
        </h2>
       
      </header>
    </div>
  );
}

export default App;
