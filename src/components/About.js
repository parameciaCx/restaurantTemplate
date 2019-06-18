import React from 'react';
import aboutBg from './about-bg.jpg';

const About = (props) => {
	document.body.style.backgroundImage = `url("${aboutBg}")`;
	document.body.style.backgroundSize = 'cover';
	document.body.style.backgroundRepeat = 'no-repeat';
	document.body.style.backgroundPosition = '-540px 0px';
	return <div> About Us </div>;
};

export default About;
