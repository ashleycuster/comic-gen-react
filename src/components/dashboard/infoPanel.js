"use strict";

var React = require('react'); 

var InfoPanel = React.createClass({
	propTypes: {
		marginLeft: React.PropTypes.number.isRequired
	},

	render: function () {
		return (
				<div width="2000px" style={{ marginLeft: this.props.marginLeft }}>
					<h1>Agency Name, Risk#</h1>
					<table style={{ marginTop: "20px", marginLeft: "20px"}}>
						<tr>
							<td style={{width: "1000px"}}>Number of endpoints identified</td>
							<td style={{width: "1000px"}}>###</td>
						</tr>
						<tr>
							<td>Number of endpoints secured</td>
							<td>###</td>
						</tr>
						<tr height="20px">
							<td colSpan="2"></td>
						</tr>
						<tr>
							<td>Number of users</td>
							<td>###</td>
						</tr>
						<tr height="20px">
							<td colSpan="2"></td>
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