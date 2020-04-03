import React from 'react';
// import logo from 'favicon.png';
import './App.css';
import bookJson from './myBooks.json'
// import * as pics from './images'


function App() {
  // this.state = { homeShow: true };


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
        <MainHome />


        <h2 className="headerFooter">Sarah Lois Thompson
        </h2>

      </header>
    </div>
  );
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}


class MainHome extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwitchClick = this.handleSwitchClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { homeShow: true };
  }

  handleSwitchClick() {
    if (this.state.homeShow) {
      this.setState({ homeShow: false });
    }
    else {
      this.setState({ homeShow: true });
    }
  }


  render() {
    const homeShow = this.state.homeShow;
    let shown;
    let main;
    if (homeShow) {
      shown = <button className="mainButton" onClick={this.handleSwitchClick} >View Library</button>;
      main = <Graph />
    } else {
      shown = <button className="mainButton" onClick={this.handleSwitchClick} >View Main</button>;
      main = <BookShelf />;
    }

    return (
      <div className="homeMain">
        <div>{shown}</div>
        <span>{main}</span>
      </div>
    );
  }
}

class Modal extends React.Component {
  render() {
    return (<div >Hello Modal</div>);
  }
}

class BookShelf extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      booklist: bookJson.Books,
      currentPick: "All",

      book: null
    }
  }

  filterBooks(filter) {
    let newList = [];
    if (filter === "Non-Fiction") {
      for (let i = 0; i < bookJson.Books.length; i++) {
        if (bookJson.Books[i].nonFic === "True") {
          newList.push(bookJson.Books[i]);
        }
      }
    } else {
      for (let i = 0; i < bookJson.Books.length; i++) {

        if (bookJson.Books[i].genre.includes(filter)) {
          newList.push(bookJson.Books[i]);
        }
      }
    }
    this.setState({ booklist: newList })
  }

  handleChange = (e) => {
    if (e !== this.state.currentPick) {
      this.setState({ currentPick: e })
      if (e === "All") {
        this.setState({ booklist: bookJson.Books })
      } else {
        this.filterBooks(e);
      }
    }
  }
  renderGenreDrop() {
    return (
      <div className="dropdown">
        <div className="dropdownSelect">{this.state.currentPick}</div>
        <div className="dropdown-content" id="genre" name="Genre">
          <div onClick={this.handleChange.bind(this, "All")}>All</div>
          <div onClick={this.handleChange.bind(this, "Non-Fiction")}>Non-Fiction</div>
          <div onClick={this.handleChange.bind(this, "Novel")}>Novel</div>
          <div onClick={this.handleChange.bind(this, "Science Fiction")}>Science Fiction</div>
          <div onClick={this.handleChange.bind(this, "Humor")}>Humor</div>
          <div onClick={this.handleChange.bind(this, "Music")}>Music</div>
          <div onClick={this.handleChange.bind(this, "Business")}>Business</div>
          <div onClick={this.handleChange.bind(this, "Historical Fiction")}>Historical Fiction</div>
        </div>
      </div>
    )
  }

  renderGenres() {
    let genres = [];
    if (this.state.book.nonFic === "True") {
      genres.push(<span>Genres: Non-Fiction</span>);
    } else {
      genres.push(<span>Genres: Fiction</span>);
    }
    for (let i = 0; i < this.state.book.genre.length; i++) {
      genres.push(<span>, {this.state.book.genre[i]}</span>)
    }

    return genres;
  }
  renderModal() {
    // import bookImage from {{this.state.book.image}}


    if (this.state.book) {
      let images = importAll(require.context('./imagesBooks', false, /\.(png|jpe?g|svg)$/));

      return (
        <div>
          <div className="modalShadow" onClick={this.handleModal.bind(this, this.state.book)}> </div>
          <div className="bookModal">
            <div>
              <div className="modalHeader">
                <h2 > {this.state.book.title}</h2>
                <h5>{this.state.book.author}</h5>
              </div>
              <div >
              <div style={{ marginTop: 5 + 'px' }} className="col-4-m">
                <img style={{ width: 60 + '%' }} src={images[this.state.book.image]} />
              </div>
              
                <div className="col-8-m">
                  <p ngIf="this.state.book.subtitle">{this.state.book.subtitle}</p>
                  <div>
                    Length: {this.state.book.pages}, Published in {this.state.book.published}
                  </div>

                  <div>
                    {this.renderGenres()}
                  </div>

                </div>

              </div>


            </div>
            <div className="closeModal" onClick={this.handleModal.bind(this, this.state.book)} >Close</div>
          </div>
        </div>


      )
    } else {
      return (
        <div></div>
      )
    }
  }
  handleModal = (bookModal) => {
    if (this.state.book) {
      this.setState({ book: null })
    } else {
      this.setState({ book: bookModal })

    }
  }

  renderBookStack() {
    // const booklist = bookJson.Books
    let books = [];
    let paddingNum = 18;
    let fontfams = ['monospace', 'fantasy', 'cursive', 'sans-serif', 'sans-serif', 'serif', 'serif'];
    let alignList = ["left", "left", "right", "center", "center"];
    let bookPile = 14;
    // if (this.state.booklist.length <= 14) {
    bookPile = this.state.booklist.length
    // }
    for (let i = 0; i < bookPile; i++) {
      if (this.state.booklist[i].title.length > 25) {
        paddingNum = 17;
      } else if (this.state.booklist[i].pages < 400) {
        paddingNum = 9;
      } else if (this.state.booklist[i].pages < 550) {
        paddingNum = 13;
      } else if (this.state.booklist[i].pages < 700) {
        paddingNum = 16;
      }

      books.push(
        <div className='bookCopy' style={{ marginLeft: String(Math.floor((Math.random() * 30) + 1)) + 'px', width: String(92 - Math.floor((Math.random() * 10) + 1)) + "%", background: this.state.booklist[i].coverColor }}>
          <div className='bookTitle' style={{ fontFamily: fontfams[Math.floor(Math.random() * fontfams.length)], textAlign: alignList[Math.floor(Math.random() * 5)], paddingTop: paddingNum + 'px', paddingBottom: paddingNum + 'px', 'color': this.state.booklist[i].secondaryColor }} id="this.state.booklist[i].title">{this.state.booklist[i].title}
          </div>
        </div>)
    }
    return books;
  }

  renderBookDisplay() {
    const images = importAll(require.context('./imagesBooks', false, /\.(png|jpe?g|svg)$/));

    let booksDisplay = [];
    for (let i = 0; i < this.state.booklist.length; i++) {
      booksDisplay.push(
        <div className="bookImages" >
          <div onClick={this.handleModal.bind(this, this.state.booklist[i])} style={{ margin: 5 + "px" }}>
            <img src={images[this.state.booklist[i].image]} />
          </div>
        </div>
      );
    }
    return booksDisplay;
  }
  render() {
    return (
      <div>
        {this.renderModal()}
        <div className="bookShelf">
          {/* <h2>books</h2> */}
          {/* <Modal show={this.show.showModal}/> */}

          {this.renderGenreDrop()}
          <div >{this.renderBookStack()}</div>
        </div>
        <div className="bookDisplay">
          {this.renderBookDisplay()}
        </div>
      </div>

    )
  }
}

//     "font-family": this.fontfams[Math.floor(Math.random() * this.fontfams.length)]









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
      <Line left={i * (100 / 12)} key={i} />
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
        <p>*Source: Me</p>
      </div>
    )
  }
}


// const BarTextContext = ({ labels }) => {
//   return (
//     <div className="bar-text-context">
//       {/* {
//       labels.map((labels)=>(
//         <div className="text">
//       {labels.name}
//         </div>
//       ))
//     } */}
//     </div>
//   )
// }

const Bar = ({ percent, label }) => {
  // console.log(label);
  return (
    <div className="labelCombo">
      <span className="label">{label}</span>
      <div className="bar" style={{ width: (percent * .833) + '%' }} />
    </div>

  )
}
const Line = ({ left }) => {
  return (
    <div className="line" style={{ left: left + '%' }} />
  )
}




export default App;
