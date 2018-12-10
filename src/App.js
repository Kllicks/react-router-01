import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
	BrowserRouter as Router, // Watches for changes to URL
	Route,                   // Renders components based on the specific URL
	//Link                     // Changes the URL so the Router sees it
} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import OneCat from './OneCat';
import Dogs from './Dogs';
import OneDog from './OneDog';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// catList: [
			//   'Oakley',
			//   'Milla',
			//   'Whisper',
			//   'Neo'
			// ],
			catToys: {
				'Oakley': [
					'string',
					'bookmarks',
					'ice'
				],
				'Milla': [
					'drool'
				],
				'Whisper': [
					'string'
				],
				'Neo': [
					'the couch'
				]
			},

			dogToys: {
				'Zoey': [
					'elephant'
				],
				'Milly': [
					'pillow'
				],
				'Luna': [
					'rope'
				],
				'Cocoa': [
					'owl'
				]
			}
		};
	}
	render() {
		return (
			<Router>
				<div>
					<NavBar />
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/cats" render={(props) => {
						return <Cats catList={Object.keys(this.state.catToys)} {...props} />
					}} />          
					<Route path="/cats/:catName" render={(props) => {
						return <OneCat toys={this.state.catToys} {...props} />
					}} />
					<Route path="/dogs" render={(props) => {
						return <Dogs dogList={Object.keys(this.state.dogToys)} {...props} />
					}} />          
					<Route path="/dogs/:dogName" render={(props) => {
						return <OneDog toys={this.state.dogToys} {...props} />
					}} />
				</div>
			</Router>
		);
	}
}

export default App;