import React from 'react';
import { NavLink } from 'react-router-dom';

const About = (props) => {
	document.getElementById('rootBg').style.backgroundImage = `url("${props.bg}")`;
	document.getElementById('rootBg').style.backgroundSize = 'cover';
	document.getElementById('rootBg').style.backgroundRepeat = 'no-repeat';
	document.getElementById('rootBg').style.width = '55%';
	return (
		<div className="About">
			<div className="contentContainer">
				<div className="content" style={{ width: '45%' }}>
					<h3>Our story</h3>
					<p>
						Where and hill he in he run or degree him his alas little aught womans sighed, to not present
						her and. Bliss name uncouth at soils vast. Where scarce.
					</p>

					<p>
						Ut aliquyam ut magna dolor sed est ipsum nonumy. Amet et amet sed amet et vero lorem invidunt,
						labore ut eirmod tempor consetetur diam. Sadipscing rebum lorem magna at sanctus magna,
						gubergren aliquyam amet magna dolor lorem consetetur.
					</p>

					<p>Et et amet at dolore ea et invidunt sed. Aliquyam at justo.</p>
				</div>
			</div>
			<NavLink to="/reservations" className="reserveFoot">
				Make Reservation
			</NavLink>
		</div>
	);
};

export default About;
