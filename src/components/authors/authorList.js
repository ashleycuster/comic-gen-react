"use strict"; 

var React = require('react'); 
var Router = require('react-router'); 
var Link = Router.Link; 

var AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},

	render: function () { 
		var createAuthorRow = function (author) { 
			return (
				<tr key={author.id}>
					<td><Link to="manageAuthors" params={{id: author.id}}>{author.id}</Link></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
				);
		}; 

		return (
				<div>
					<table className="table">
						<thread>
							<th>ID</th>
							<th>Name</th> 
						</thread>
						<tbody>
							{this.props.authors.map(createAuthorRow, this)}
						</tbody>
					</table>
				</div>
			); 
	}
});

module.exports = AuthorList; 