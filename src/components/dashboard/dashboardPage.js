"use strict"; 

var React = require('react'); 
var Router = require('react-router'); 
var SunburstChart = require('./sunburstChart'); 
var Bar = require('./bar'); 
var Path = require('./path');
var Info = require('./info');
var d3 = require('d3');
var DashboardApi = require('../../api/dashboardApi');

var width = 550; 
var height = 400; 
var radius = Math.min(width, height) / 2;


var Dashboard = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {
	},

	getDefaultProps: function() {
        return {
          width: width,
          height: height,
          radius: radius
        };
    },

    getInitialState: function() {
		return {
			arcData: {json: {}, array: []}
		};
	},

    componentWillMount: function () {
		var vm = this;

		DashboardApi.getData(radius, function (newArcData) {
			var setArcData = {json: {}, array: []};
			setArcData.json = newArcData.json; 
			setArcData.array = newArcData.array;
			vm.setState({arcData: setArcData});
		});
    },

    componentDidMount: function () {

    },

    render: function () {
		return (
			<div>
				<hr/>
					<SunburstChart width={this.props.width}
						height={this.props.height}>
						<Path width={this.props.width}
							height={this.props.height}
							radius={this.props.radius}
							arcData={this.state.arcData} />
					</SunburstChart>
					<Info marginLeft={this.props.width} />
			</div>
			);
	}
});

module.exports = Dashboard;         