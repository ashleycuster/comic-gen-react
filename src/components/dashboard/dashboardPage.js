"use strict"; 

var React = require('react'); 
var Router = require('react-router'); 
var Chart = require('./chart'); 
var Bar = require('./bar'); 

var all = [
  {x: 'a', y: 20}, 
  {x: 'b', y: 14}, 
  {x: 'c', y: 12}, 
  {x: 'd', y: 19}, 
  {x: 'e', y: 18}, 
  {x: 'f', y: 15}, 
  {x: 'g', y: 10}, 
  {x: 'h', y: 14}
];


var filtered = [
  {x: 'a', y: 9}, 
  {x: 'b', y: 5}, 
  {x: 'c', y: 6}, 
  {x: 'd', y: 12}, 
  {x: 'e', y: 10}, 
  {x: 'f', y: 7}, 
  {x: 'g', y: 4}, 
  {x: 'h', y: 9}
];

var Dashboard = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {

	},

	getDefaultProps: function() {
        return {
          width: 500,
          height: 500
        };
    },

    getInitialState: function() {
        return {
          data: all
        };
    },

    showAll: function() {
      this.setState({data: all});
    },

    filter: function() {
      this.setState({data: filtered});
    },

	render: function () {
		return (
			<div>
				<div className="selection">
					<ul>
						<li onClick={this.showAll}>All</li>
						<li onClick={this.filter}>Filter</li>
					</ul>
				</div>
				<hr/>
				<Chart width={this.props.width} 
                   height={this.props.height}>
                   <Bar data={this.state.data}
						width={this.props.width}
						height={this.props.height} />
				</Chart>
			</div>
			);
	}
});

module.exports = Dashboard; 