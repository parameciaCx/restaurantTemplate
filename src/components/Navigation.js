import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

const Navigation = () => {
	return (
		<div className="navigator">
			<NavLink exact={true} activeClassName="is-active" to="/">
				Home
			</NavLink>
			<NavLink activeClassName="is-active" to="/about">
				About Us
			</NavLink>
			<NavLink activeClassName="is-active" to="/menu">
				Chef's Menu
			</NavLink>
			<NavLink activeClassName="is-active" to="/reservations">
				Reservations
			</NavLink>
			<NavLink activeClassName="is-active" to="/ingredients">
				Ingredients
			</NavLink>
			<NavLink activeClassName="is-active" to="/contact">
				Contact Us
			</NavLink>
		</div>
	);
};

export default Navigation;
