import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Header from './Header'

class App extends Component {
  render() {
    const {children} = this.props

    return (
      <div className="App">
        <Header />
        <p className="App-intro">
        {children}
        </p>
      </div>
    );
  }
}

export default App;
