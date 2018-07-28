import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import './assets/App.css';

import AppSidebar from './components/Sidebar/Sidebar.jsx';
import AppHeader from './components/Header/Header.jsx';
import AppFooter from './components/Footer/Footer.jsx';

import dashboardRoutes from './routes/DashboardRoutes.jsx'

class App extends Component {
  constructor (props) {
    super(props);
    // this.componentDidMount = this.componentDidMount.bind(this);

  }

  render() {

    return (

      <div className='fp-wrapper'>

        <div className='fp-sidebar'>
          <AppSidebar {...this.props} />
        </div>

        <div className='fp-main-panel'>
          <AppHeader {...this.props} />

          <Switch>
          {dashboardRoutes.map((prop, key) => {
            if (prop.redirect) 
              return <Redirect from={prop.path} to={prop.to} key={key} />;
            return (
              <Route path={prop.path} component={prop.component} key={key} />
              );
          })}
          </Switch>

          <div className='fp-footer'>
            <AppFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default App;