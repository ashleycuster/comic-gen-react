"use strict";

var React = require('react'); 
var SunburstStore = require('../../stores/sunburstStore');
var DashboardApi = require('../../api/dashboardApi');

var InfoPanel = React.createClass({
	propTypes: {
		marginLeft: React.PropTypes.number.isRequired
	},

	getInitialState: function () {
		return {
			agencyName: "Agency Name",
			riskScore: ""
		};
	},

	componentWillMount: function () {
		SunburstStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		SunburstStore.removeChangeListener(this._onChange); 
	},

	_onChange: function () {
		var highlightedNodes = SunburstStore.getHighlightedNodes();
		var agencyName = highlightedNodes[0].name;
		var riskScore = DashboardApi.dhsAgencyRiskScores[agencyName];
		this.setState({agencyName: agencyName.toUpperCase(), riskScore: riskScore});
	},

	render: function () {
		return (
				<div width="1000px" style={{ marginLeft: this.props.marginLeft }}>
					<h1>{this.state.agencyName}, Risk Score: {this.state.riskScore}</h1>
					<table style={{ marginTop: "20px", marginLeft: "20px"}}>
						<tr>
							<td style={{width: "500px"}}>Number of endpoints identified</td>
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