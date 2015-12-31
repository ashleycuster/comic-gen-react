"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign'); 
var _ = require('lodash');
var CHANGE_EVENT = 'change'; 

// private authors variable
var _highlightedNodes = [];
var _fillOpacity = 1;
var _isHighlighted = false;

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
	},

	getFillOpacity: function () {
		return _fillOpacity;
	},

	getIsHighlighted: function () {
		return _isHighlighted;
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) { 
		case ActionTypes.UPDATE_NODES: 
			_highlightedNodes = action.nodes;
			_fillOpacity = 0.3;
			_isHighlighted = true;
			SunburstStore.emitChange(); 
			break; 
		case ActionTypes.RESET_CHART:
			_isHighlighted = false;
			_highlightedNodes = [];
			_fillOpacity = action.opacity;
			SunburstStore.emitChange();
			break;
		default: 
			// no op
	}
});

module.exports = SunburstStore; 