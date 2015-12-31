"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign'); 
var _ = require('lodash');
var CHANGE_EVENT = 'change'; 

// private authors variable
var _highlightedNodes = [];

var SunburstStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback); 
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT); 
	}, 

	getHighlightedNodes: function () {
		return _highlightedNodes; 
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) { 
		case ActionTypes.UPDATE_NODES: 
			_highlightedNodes = action.nodes; 
			SunburstStore.emitChange(); 
			break; 
		default: 
			// no op
	}
});

module.exports = SunburstStore; 