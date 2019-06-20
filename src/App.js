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
import homeBg from './images/home-bg.jpg';
import aboutBg from './images/about-bg.jpg';
import menuBg from './images/menu-bg.jpg';

class App extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		document.body.style.background = `url(${homeBg}) no-repeat -9999px -9999px`;
		document.head.style.background = `url(${aboutBg}) no-repeat -9999px -9999px`;
		return (
			<div style={{ background: `url(${menuBg}) no-repeat -9999px -9999px` }}>
				<Router>
					<Navigation />
					<Route path="/" exact={true} render={(props) => <Home {...props} bg={homeBg} />} />
					<Route path="/menu" render={(props) => <Menu {...props} bg={menuBg} />} />
					<Route path="/about" render={(props) => <About {...props} bg={aboutBg} />} />
					<Route path="/reservations" component={Reservations} />
					<Route path="/locations" component={Locations} />
					<Route path="/contact" component={Contact} />

					<NavLink to="/reservations" className="reserveFoot">
						Make Reservation
					</NavLink>
				</Router>
				<footer id="copy">Zangu 2019 © - All Rights Reserved </footer>
			</div>
		);
	}
}

export default App;
