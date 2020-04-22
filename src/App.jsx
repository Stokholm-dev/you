import React, { Component } from 'react';
import './style.css'; //#Import of styling
import Background from './pages/Background';
import Nav from './pages/Nav';
import { HashRouter as Router, Route } from 'react-router-dom'; //Import of react router
import Home from './pages/Home';
import Calm from './pages/Calm';
import Footer from './pages/Footer';
import Saying from './pages/Saying';
import Thankful from './pages/Thankful';

export default class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<Router>
					<Route path="/" component={Home} />
					<Route path="/Calm" component={Calm} />
					<Route path="/Saying" component={Saying} />
					<Route path="/Thankful" component={Thankful} />
				</Router>

				<Footer />
				<Background />
			</div>
		);
	}
}
