import React from 'react';
import aboutBg from './about-bg.jpg';

const About = (props) => {
	document.getElementById('rootBg').style.backgroundImage = `url("${aboutBg}")`;
	document.getElementById('rootBg').style.backgroundSize = 'cover';
	document.getElementById('rootBg').style.backgroundRepeat = 'no-repeat';
	document.getElementById('rootBg').style.width = '55%';
	return <div> About Us </div>;
};

export default About;
