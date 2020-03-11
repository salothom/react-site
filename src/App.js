import React from 'react';
// import logo from 'favicon.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <a className="App-link"
          href="https://www.linkedin.com/in/sarahthompson3/"
          // target="_blank"
          rel="noopener noreferrer" >
          Check out Linkedin.
        </a>
        <a className="App-link"
          href="https://sarahloisthompson.com/home"
          // target="_blank"
          rel="noopener noreferrer" >
          Angular Site.
        </a>

        <Graph />

        <h2 className="headerFooter">Sarah Lois Thompson
        </h2>

      </header>
    </div>
  );
}
class Graph extends React.Component {
  state = {
    coolThings: [
      { name: 'Blueberry Tea', coolness: '87' },
      { name: 'Chocolate Soft Serve w/o Sprinkles', coolness: '7' },
      { name: 'Vanilla Soft Serve w/ Sprinkles', coolness: '83' },
      { name: 'People using ellipses in emails', coolness: '17' },
      { name: 'Public Library Cards', coolness: '92' },
      { name: 'The Last Slice of Pie', coolness: '62' },
      { name: 'Having a whole Pie to share', coolness: '95' }
    ]
  }


  renderLines() {
    return Array(10).fill(null).map((el, i) => (
      <Line left={i * 10} key={i} />
    ));
  }
  renderBars() {
    // const { coolThings } = this.state.coolThings;
    console.log("hello", this.state.coolThings);
    const coolLength= this.state.coolThings.length;
    for (let i = 0; coolLength; i++) {
      return (<Bar percent={this.state.coolThings[i].coolness} key={this.state.coolThings[i].name} />
      )
    }
  }
  render() {
    return (
      <div className="graph-wrapper">
        <h4>Things that Are Cool</h4>

        <div className="graph">
          <BarTextContext />
          <div className="bar-lines-container">
            {this.renderLines()}
            {this.renderBars()}

          </div >

        </div>
      </div>
    )
  }
}
const BarTextContext = () => {
  return (
    <div className="bar-text-context">
    </div>
  )
}

const Bar = ({ percent }) => {
  return (
    <div className="bar" style={{ width: percent + '%' }} />
  )
}
const Line = ({ left }) => {
  return (
    <div className="line" style={{ left: left + '%' }} />
  )
}




export default App;
