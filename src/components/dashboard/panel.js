"use strict"; 

var React = require('react');
var Chart = require('./chart');
var Info = require('./info');

var Panel = React.createClass({
	propTypes: {
		height: React.PropTypes.number.isRequired,
		width: React.PropTypes.number.isRequired,
		position: React.PropTypes.string.isRequired
	},

	setPosition: function (position) {
		return;
	},

	render: function () {
		return (
				<div className="panel"
						width={this.props.width}
						height={this.props.height}>
					{this.props.children}
				</div>
			);
	}
});

module.exports = Panel; 