"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes'); 

var SunburstActions = {

	highlightNodes: function (nodes) {
		var updatedNodes = nodes; 

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_NODES,
			nodes: updatedNodes
		});
	},

	resetChart: function () {
		Dispatcher.dispatch({
			actionType: ActionTypes.RESET_CHART,
			opacity: 1
		});
	}
}; 

module.exports = SunburstActions; 