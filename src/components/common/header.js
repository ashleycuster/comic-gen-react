"use strict"; 

var React = require('react'); 
var Router = require('react-router'); 
var Link = Router.Link; 

var Header = React.createClass({
	render: function () {
		return (
				<nav> 
					<div className="container-fluid" style={{backgroundColor: "rgba(0,0,0,0)"}}>
						<ul className="nav navbar-nav">
							<li><Link to="app">ComicGen</Link></li>
							<li><Link to="app">Home</Link></li>
							<li><Link to="characters">Character Selection</Link></li> 
							<li><Link to="dashboard">Dashboard</Link></li>
						</ul> 
					</div>
				</nav> 
			);
	}
});

module.exports = Header; 