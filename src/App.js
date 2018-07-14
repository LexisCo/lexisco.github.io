import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NotificationSystem from "react-notification-system";

import './App.css';

import AppSidebar from './components/Sidebar/Sidebar';
import AppHeader from './components/Header/Header';

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
        <div className='fp-header'>
          <AppHeader />
        </div>
      </div>
    );
  }
}

export default App;