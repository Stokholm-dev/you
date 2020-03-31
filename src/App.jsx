import React, { Component } from 'react';
import './style.css'; //#Import of styling
import Background from './pages/Background';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1 className="headerApp">REACT APP - Hello world</h1>
                <Background></Background>
			</div>
		);
	}
}
