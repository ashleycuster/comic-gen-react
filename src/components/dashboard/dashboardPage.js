"use strict"; 

var React = require('react'); 
var Router = require('react-router'); 
var Chart = require('./chart'); 

var Dashboard = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {

	},
	render: function () {
		return (
				<Chart /> 
			);
	}
});

module.exports = Dashboard; 