"use strict";

var React = require('react');
var Router = require('react-router'); 
var TextInput = require('./textInput');
var ComicActions = require('../../actions/comicActions');
var ComicStore = require('../../stores/comicStore');
var toastr = require('toastr');

var ComicInput = React.createClass({
	mixins: [
		Router.Navigation
	],

	getDefaultProps: function () {
		return {
			placeholder: "Arthur: It is 'Arthur', King of the Britons. "
				+ "Bridgekeeper: What... is your quest? "
				+ "Arthur: To seek the Holy Grail. "
				+ "Bridgekeeper: What... is the air-speed velocity of an unladen swallow? "
				+ "Arthur: What do you mean? An African or European swallow?",
			name: "comic-input"
		};
	},

	getInitialState: function () {
		return {
			text: ''
		};
	},

	componentWillMount: function () {
		ComicStore.addChangeListener(this._onChange);
	// 	document.body.style.backgroundImage = "url('images/hieroglyph_opaque.jpg')";
	// 	document.body.style.backgroundRepeat = "no-repeat";
	// 	document.body.style.backgroundSize = "cover";
	},

	componentWillUnmount: function () {
		ComicStore.removeChangeListener(this._onChange); 
		// document.body.style.backgroundImage = null;
		// document.body.style.backgroundRepeat = null;
		// document.body.style.backgroundSize = null;
	},

	_onChange: function () {
		this.setState({text: ComicStore.getText()});
	},

	setTextState: function (event) {
		var value = event.target.value;
		return this.setState({text: value});
	},

	saveText: function (event) {
		event.preventDefault();

		ComicActions.saveText(this.state.text);

		toastr.success('Conversation submitted.'); 
		this.transitionTo('characters'); 
	},

	render: function () {
		return (
				<div style={{marginLeft: "auto", marginRight: "auto", marginTop: "100px", textAlign: "center", color: "black", fontFamily: "Poiret One"}}>
					<h1 style={{fontFamily: "Poiret One", color: "white"}}>Enter your conversation here to create the greatest comic of all time</h1>
					<TextInput placeholder={this.props.placeholder}
								name={this.props.name}
								value={this.state.text}
								onChange={this.setTextState} />
					<button type="submit" value="Next" className="btn btn-primary btn-lg" onClick={this.saveText}>Time to select some characters!</button>
				</div>
			);
	}
});

module.exports = ComicInput;