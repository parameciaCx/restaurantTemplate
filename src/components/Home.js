import React from 'react';
import { NavLink } from 'react-router-dom';
import pizzaPic from '../images/menu/pizza.jpg';
import makiPic from '../images/menu/maki.jpg';

const Home = (props) => {
	document.getElementById('rootBg').style.backgroundImage = `url("${props.bg}")`;
	document.getElementById('rootBg').style.backgroundSize = 'cover';
	document.getElementById('rootBg').style.backgroundRepeat = 'no-repeat';
	document.getElementById('rootBg').style.width = '70%';
	return (
		<div className="Home">
			<div className="contentContainer">
				<div className="content">
					<h3>Vero voluptua kasd.</h3>
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

			<div className="hotItems">
				<div className="item1">
					<img src={pizzaPic} alt="pizza" />
					<div>
						<h3>Zangu Pizza</h3>
						<p>
							Signature zangu gourmet pizza made with our secret recipe, 3 michelin star approved. magna
							dolor sed est ipsum nonumy. Amet et amet sed amet et vero lorem invidunt.
						</p>
					</div>
				</div>
				<div className="item2">
					<img src={makiPic} alt="pizza" />
					<div>
						<h3>Special maki</h3>
						<p>
							Signature maki made with our secret recipe, 3 michelin star approved. magna dolor sed est
							ipsum nonumy. Amet et amet sed amet et vero lorem invidunt.
						</p>
					</div>
				</div>
				<div />
				<NavLink to="/menu" className="menuFoot">
					More items
				</NavLink>
			</div>
		</div>
	);
};

export default Home;
