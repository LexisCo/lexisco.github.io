import React, { Component } from 'react';
import ReeactDOM from 'react-dom';

import './App.css';

import AppHeader from './components/Header/Header';

class App extends Component {
  constructor () {
    super ();
    this.state = { 
      count: 0 
    };
  }

  excited = () => {
    this.setState ({ count: this.state.count + 1});
  }

  render() {
    return (
      <div >
        <div className='AppHeader'>
          <AppHeader />
        </div>

        <header className="Lexis-fp-header">
          <h1 className="Lexis-fp-title">Lexis: </h1>
          <p className="Lexis-fp-subtitle"> The Next Big Thing </p>
        </header>

        <p className="Lexis-fp-layer1">
          <br></br><br></br>
          Glen, lets put some content here. Some cool ideas, you know?
          <br></br><br></br>
        </p>
        
        <div className="Lexis-fp-layer2">
            <tab></tab> Excited Level: { this.state.count }
            <br></br><br></br>
            <button primary class="button-excited" onClick={this.excited}> EXCITED! </button>
        </div>
      </div>
    );
  }
}

export default App;