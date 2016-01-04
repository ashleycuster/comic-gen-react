"use strict";

var React = require('react');
var TextInput = require('./textInput');

var ComicInput = React.createClass({

	getDefaultProps: function () {
		return {
			placeholder: "King Arthur: It is 'Arthur', King of the Britons. "
				+ "Bridgekeeper: What... is your quest? "
				+ "King Arthur: To seek the Holy Grail. "
				+ "Bridgekeeper: What... is the air-speed velocity of an unladen swallow? "
				+ "King Arthur: What do you mean? An African or European swallow?",
			name: "comic-input",
			value: null
		};
	},

	render: function () {
		return (
				<div style={{marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
					<h1>Enter your conversation here to create... <br /> the most brilliant comic of all time</h1>
					<TextInput placeholder={this.props.placeholder}
								name={this.props.name}
								value={this.props.value} />
					<button type="submit" value="Next" className="btn btn-primary btn-lg">Next</button>
				</div>
			);
	}
});

module.exports = ComicInput;