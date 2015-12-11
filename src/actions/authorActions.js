"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var Author = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes'); 

var AuthorActions = {
	createAuthor: function (author) {
		var newAuthor = Author.saveAuthor(author); 

		// Asks the dispatcher to go tell all the stores that an author was just created
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	}, 

	updateAuthor: function (author) {
		var updatedAuthor = Author.saveAuthor(author); 

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthor
		});
	}
}; 

module.exports = AuthorActions; 