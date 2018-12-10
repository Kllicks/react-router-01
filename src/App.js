import React, { Component } from 'react';
import './App.css';

import {
	BrowserRouter as Router, // watches for changes to URL
	Route,	// Renders components based on the specific URL
	Link	// Changes the URL so the Router sees it
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Cats from './Cats';
import NavBar from './NavBar';



class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					{/* <Route path="/" component={NavBar}/> */}
					<Route path="/" exact component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/cats" component={Cats}/>
				</div>
			</Router>
		);
	}
}

export default App;
