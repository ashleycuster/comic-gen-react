"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign'); 
var _ = require('lodash');
var CHANGE_EVENT = 'change'; 
var ComicApi = require('../api/comicApi');

// private text variable
var _text = '';
var _possibleCharacters = [];
var _selectedCharacters = [];
var _characterMap = {};

var ComicStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback); 
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT); 
	}, 

	getText: function () {
		return _text; 
	},

	setPossibleCharacters: function () {
		_possibleCharacters = ComicApi.findCharacters(_text);
	},

	getPossibleCharacters: function () {
		return _possibleCharacters;
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) { 
		case ActionTypes.SAVE_TEXT: 
			_text = action.text;
			ComicStore.setPossibleCharacters();
			ComicStore.emitChange(); 
			break; 
		default: 
			// no op
	}
});

module.exports = ComicStore; 