"use strict";

var React = require('react'); 

var InfoPanel = React.createClass({
	render: function () {
		return (
				<div className="info-panel">
					<h1>Agency Name, Risk Score</h1>
					<table>
						<tr>
							<td>Number of endpoints identified</td>
							<td>###</td>
						</tr>
						<tr>
							<td>Number of endpoints secured</td>
							<td>###</td>
						</tr>
						<tr>
							<td>Number of users</td>
							<td>###</td>
						</tr>
						<tr>
							<td>Licenses required</td>
							<td>###</td>
						</tr>
						<tr>
							<td>Licenses procured</td>
							<td>###</td>
						</tr>
						<tr>
							<td>Licenses installed</td>
							<td>###</td>
						</tr>
					</table>
				</div>
			);
	}
});

module.exports = InfoPanel; 