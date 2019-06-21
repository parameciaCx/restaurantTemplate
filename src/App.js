import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import contactBg from './images/contact-bg.jpg';
import reserveBg from './images/reservations-bg.jpg';
import locationsBg from './images/locations-bg.jpg';

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
				<Router style={{ background: `url(${locationsBg}) no-repeat -9999px -9999px` }}>
					<div style={{ background: `url(${contactBg}) no-repeat -9999px -9999px` }}>
						<Navigation />
					</div>
					<Route path="/" exact={true} render={(props) => <Home {...props} bg={homeBg} />} />
					<Route path="/menu" render={(props) => <Menu {...props} bg={menuBg} />} />
					<Route path="/about" render={(props) => <About {...props} bg={aboutBg} />} />
					<Route path="/reservations" render={(props) => <Reservations {...props} bg={reserveBg} />} />
					<Route path="/locations" render={(props) => <Locations {...props} bg={locationsBg} />} />
					<Route path="/contact" render={(props) => <Contact {...props} bg={contactBg} />} />
				</Router>
				<footer id="copy" style={{ background: `url(${reserveBg}) no-repeat -9999px -9999px` }}>
					Zangu 2019 © - All Rights Reserved{' '}
				</footer>
			</div>
		);
	}
}

export default App;
