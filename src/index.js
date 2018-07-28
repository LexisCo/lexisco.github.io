import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch } from "react-router-dom";

import './index.css';
import App from './App.js';
import indexRoutes from './routes/index.jsx'

import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
	<HashRouter>
		<Switch>
			{indexRoutes.map((prop, key) => 
				{ return <Route to={prop.path} component={prop.component} key={key} />;}
				)
			}
		</Switch>
	</HashRouter>,
	document.getElementById('root')
);