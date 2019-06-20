import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import logo from '../images/logo.png';

class Navigation extends Component {
	render() {
		return (
			<div className="header">
				<img src={logo} alt="logo" />
				<div className="navigator">
					<NavLink exact={true} activeClassName="is-active" to="/">
						Home &nbsp; &nbsp;
					</NavLink>
					<NavLink activeClassName="is-active" to="/about">
						About Us &nbsp;
					</NavLink>
					<NavLink activeClassName="is-active" to="/menu">
						Chef's Menu &nbsp;
					</NavLink>
					<NavLink activeClassName="is-active" to="/reservations">
						Reservations&nbsp;
					</NavLink>
					<NavLink activeClassName="is-active" to="/ingredients">
						Ingredients&nbsp;
					</NavLink>
					<NavLink activeClassName="is-active" to="/contact">
						Contact Us&nbsp;
					</NavLink>
				</div>
			</div>
		);
	}
}

export default Navigation;
