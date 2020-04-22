import React, { Component } from 'react';
import './style.css'; //#Import of styling
import Background from './pages/Background';
import Nav from './pages/Nav';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'; //Import of react router
import Home from './pages/Home';
import Calm from './pages/Calm';
import Footer from './pages/Footer';
import Saying from './pages/Saying';
import Thankful from './pages/Thankful';

export default class App extends Component {
	render() {
		return (
			<div>
                <Nav></Nav>
                    <Router>
                        <Switch>
                            <Route path="/Home" exact component={Home}></Route>
                            <Route path="/Calm" exact component={Calm}></Route>
                            <Route path="/Saying" exact component={Saying}></Route>
                            <Route path="/Thankful" exact component={Thankful}></Route>
                            <Redirect from='/' to="/Home" /> 
                        </Switch>
                    </Router>
                <Footer></Footer>
                <Background></Background>
			</div>
		);
	}
}