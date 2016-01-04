"use strict"; 

var ComicApi = {

	findCharacters: function (text) {
		var uniqueNames = [];
		var regex = /\b\w+:\s+/g;
		var nameArray = text.match(regex);
		var name;
		for (var index in nameArray) {
			name = nameArray[index].split(':', 1)[0];
			if (uniqueNames.indexOf(name) < 0) {
				uniqueNames.push(name);
			}
		}
		console.log(uniqueNames);
		return uniqueNames;
	}
};

module.exports = ComicApi; 