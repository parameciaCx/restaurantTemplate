import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Reservations from './components/Reservations';
import Locations from './components/Locations';
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
					<Route path="/" exact={true} component={Home} />
					<Route path="/menu" component={Menu} />
					<Route path="/about" component={About} />
					<Route path="/reservations" component={Reservations} />
					<Route path="/locations" component={Locations} />
					<Route path="/contact" component={Contact} />

					<NavLink to="/contact" className="contactFoot">
						CONTACT ME
					</NavLink>
				</Router>
				<footer>hello</footer>
			</div>
		);
	}
}

export default App;
