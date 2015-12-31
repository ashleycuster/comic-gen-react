"use strict"; 

var React = require('react'); 
var Router = require('react-router'); 
var SunburstChart = require('./sunburstChart'); 

var width = 550; 
var height = 400; 
var radius = Math.min(width, height) / 2;


var Dashboard = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {
	},

	getDefaultProps: function() {
        return {
          width: width,
          height: height,
          radius: radius
        };
    },

    render: function () {
		return (
			<div>
				<hr/>
					<SunburstChart width={this.props.width}
						height={this.props.height}
						radius={this.props.radius} />
			</div>
			);
	}
});

module.exports = Dashboard;         