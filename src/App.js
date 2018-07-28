import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import './App.css';

import AppSidebar from './components/Sidebar/Sidebar';
import AppHeader from './components/Header/Header';
import Dashboard from './main/Dashboard';
import AppFooter from './components/Footer/Footer';

class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {

    return (

      <div className='fp-wrapper'>

        <div className='fp-sidebar'>
          <AppSidebar />
        </div>

        <div className='fp-main-panel'>
          <AppHeader />

          <Dashboard />

          <div className='fp-footer'>
            <AppFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default App;