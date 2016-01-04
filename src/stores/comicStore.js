"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign'); 
var _ = require('lodash');
var CHANGE_EVENT = 'change'; 

// private text variable
var _text = '';

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
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) { 
		case ActionTypes.SAVE_TEXT: 
			_text = action.text;
			ComicStore.emitChange(); 
			break; 
		default: 
			// no op
	}
});

module.exports = ComicStore; 