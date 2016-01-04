"use strict";

var React = require('react');
var Router = require('react-router'); 
var ComicActions = require('../../actions/comicActions');
var ComicStore = require('../../stores/comicStore');
var toastr = require('toastr');

var CharacterPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	getInitialState: function () {
		return {
			possibleCharacters: ComicStore.getPossibleCharacters(),	// possible names extracted from text
			selectedCharacters: [],	// user-confirmed names
			characterMap: {} 		// character name mapped to image
		};
	},

	componentWillMount: function () {
		ComicStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		ComicStore.removeChangeListener(this._onChange); 
	},

	_onChange: function () {

	},

	setCharacterState: function (event) {

	},

	saveCharacter: function (event) {
		event.preventDefault();

		toastr.success('Characters saved!'); 
		// this.transitionTo('about'); 
	},

	render: function () {
		return (
				<p>Your first character is {this.state.possibleCharacters[0]}</p>
			);
	}
});

module.exports = CharacterPage; 