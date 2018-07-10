import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super ();

  }


  render() {
    return (
      <div className="Lexis-fp">

        <header className="Lexis-fp-header">
          <h1 className="Lexis-fp-title">Lexis: </h1>
          <p className="Lexis-fp-subtitle"> The Next Big Thing </p>
        </header>

        <p className="Lexis-fp-layer1">
          Glen, lets put some content here.
          <br></br><br></br>
          Some cool ideas, you know?
        </p>

      </div>
    );
  }
}

export default App;


