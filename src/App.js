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
        <p>*Source: Me</p>

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
    return Array(12).fill(null).map((el, i) => (
      <Line left={i * (100/12)} key={i} />
    ));
  }
  renderBars() {
    // const { coolThings } = this.state.coolThings;
    const coolLength = this.state.coolThings.length;
    let bars = [];
    for (let i = 0; i < coolLength; i++) {
      bars.push(<Bar percent={this.state.coolThings[i].coolness} label={this.state.coolThings[i].name} />
      )
    }
    return bars;
  }
  render() {
    return (
      <div className="graph-wrapper">
        <h4>How Great Some Things Are*</h4>

        <div className="graph">
          {/* <BarTextContext labels={this.state.coolThings} /> */}
          <div className="bar-lines-container">
            {this.renderLines()}
            {this.renderBars()}

          </div >

        </div>
      </div>
    )
  }
}
const BarTextContext = ({ labels }) => {
  return (
    <div className="bar-text-context">
      {/* {
      labels.map((labels)=>(
        <div className="text">
      {labels.name}
        </div>


      ))
    } */}
    </div>
  )
}

const Bar = ({ percent, label }) => {
  console.log(label);
  return (
    <div className="labelCombo">
      <span className="label">{label}</span>
    <div className="bar" style={{ width: (percent*.833) + '%' }} />
    </div>
    
  )
}
const Line = ({ left }) => {
  return (
    <div className="line" style={{ left: left + '%' }} />
  )
}




export default App;
