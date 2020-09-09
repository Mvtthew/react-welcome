import React from 'react';
import './App.scss';
import { Home } from './views/home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Error404 } from './views/error404/Error404';

class App extends React.Component {
	render = () => {
		return (
			<div className="app">
				<Router>
					<Switch>
						<Route path="/" exact>
							<Home></Home>
						</Route>
						<Route path="/">
							<Error404></Error404>
						</Route>
					</Switch>
				</Router>
			</div>
		);
	};
}

export default App;
