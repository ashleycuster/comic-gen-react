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
	}
}; 

module.exports = SunburstActions; 