import React from 'react';
import homeBg from './home-bg.jpg';

const Home = (props) => {
	document.body.style.backgroundImage = `url("${homeBg}")`;
	document.body.style.backgroundSize = 'cover';
	document.body.style.backgroundRepeat = 'no-repeat';
	document.body.style.backgroundPosition = '-420px 0px';
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
			<div className="hotItems">hahahahah</div>
		</div>
	);
};

export default Home;
