import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Reservations from './components/Reservations';
import Ingredients from './components/Ingredients';
import Menu from './components/Menu';
import Contact from './components/Contact';
import './styles.css';

class App extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<div>
				<Router>
					<Navigation />
					<Route path="/" component={Home} />
					<Route path="/menu" component={Menu} />
					<Route path="/about" component={About} />
					<Route path="/reservations" component={Reservations} />
					<Route path="/ingredients" component={Ingredients} />
					<Route path="/contact" component={Contact} />
				</Router>
			</div>
		);
	}
}

export default App;
