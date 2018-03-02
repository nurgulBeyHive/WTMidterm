import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      activateHome:false,
      activateAbout:false,
      activateContact:false
    }
  }

  handleHomeClicked=(e) => {
    this.setState ({
      activateHome:true,
      activateAbout:false,
      activateContact:false
    })

  }

   handleAboutClicked=(e) => {
    this.setState ({
      activateHome:false,
      activateAbout:true,
      activateContact:false
    })

  }

   handleContactClicked=(e) => {
    this.setState ({
      activateHome:false,
      activateAbout:false,
      activateContact:true
    })

  }
  render() {
    return (
      <div classname="App">
        <header className="App-header">
            <h1 className="App-title">My Navigation Bar</h1>
        </header>
        <button classname={this.state.activateHome == true ? "activateHome" : "button"}
          onClick={this.handleHomeClicked}>Home</button>
        <button classname={this.state.activateAbout == true ? "activateAbout" : "button"}
          onClick={this.handleAboutClicked}>About</button>
        <button classname={this.state.activateContact == true ? "activateContact" : "button"}
          onClick={this.handleContactClicked}>Contact</button>

      </div>
    );
  }
}

export default App;
