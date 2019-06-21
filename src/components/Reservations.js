import React from 'react';

const Reservations = (props) => {
	document.getElementById('rootBg').style.backgroundImage = `url("${props.bg}")`;
	document.getElementById('rootBg').style.backgroundSize = 'cover';
	document.getElementById('rootBg').style.backgroundRepeat = 'no-repeat';
	document.getElementById('rootBg').style.width = '63%';
	return (
		<div className="Reservations">
			<div className="contentContainer">
				<div className="content" style={{ width: '37%' }}>
					<h3>Make a reservation</h3>
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
		</div>
	);
};

export default Reservations;
