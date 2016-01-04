"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes'); 

var ComicActions = {

	saveText: function (text) {
		Dispatcher.dispatch({
			actionType: ActionTypes.SAVE_TEXT,
			text: text
		});
	}
}; 

module.exports = ComicActions; 