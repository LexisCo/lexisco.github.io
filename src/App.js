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
          <AppSidebar />
            <div className='fp-panel-main'>
              <AppHeader />
          </div>
      </div>
    );
  }
}

export default App;