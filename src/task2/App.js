import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    constructor(props){
    super(props);
    this.state= {
      productlist: Products,
      totalprice:0

      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
      this.props.onAddToCartClicked(this.props.index);
    }
    }
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Products</h1>
        </header>
      </div>
    );
  }
}

export default App;
