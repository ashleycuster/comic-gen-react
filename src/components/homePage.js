"use strict";

var React = require('react'); 
var Router = require('react-router'); 
var Link = Router.Link;
var ComicInput = require('./home/ComicInput');

var Home = React.createClass({
	componentWillMount: function () {
		document.body.style.backgroundImage = "url('images/banksy_robot_wall.jpg')";
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundSize = "cover";
	},

	componentWillUnmount: function () {
		document.body.style.backgroundImage = null;
		document.body.style.backgroundRepeat = null;
		document.body.style.backgroundSize = null;
	},

	render: function () {
		return (
			<ComicInput />
				// <div className="jumbotron"> 
				// 	<h1>React and D3</h1>
				// 	<p>React, Router, Flux, and D3 for ultra responsive web apps and data visualizations</p> 
				// 	<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
				// </div> 
			);
	}
});

module.exports = Home; 