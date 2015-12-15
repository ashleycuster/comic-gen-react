"use strict"; 

var React = require('react'); 
var Router = require('react-router'); 
var Chart = require('./chart'); 
var Bar = require('./bar'); 
var Path = require('./path'); 

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

var width = 750; 
var height = 600; 
var radius = Math.min(width, height) / 2;

var jsonData = {
	"name": "root", 
	"children": [
		{ "name": "account", "children": [
			{ "name": "account", "size": 10 }, 
			{ "name": "home", "size": 5 }, 
			{ "name": "product", "size": 15 }, 
			{ "name": "search", "size": 20 }, 
			{ "name": "other", "size": 7 }, 
			{ "name": "end", "size": 10 }
		] }, 
		{ "name": "home", "children": [
			{ "name": "account", "size": 10 }, 
			{ "name": "home", "size": 5 }, 
			{ "name": "product", "size": 15 }, 
			{ "name": "search", "size": 20 }, 
			{ "name": "other", "size": 7 }, 
			{ "name": "end", "size": 10 }
		] }, 
		{ "name": "product", "children": [
			{ "name": "account", "size": 10 }, 
			{ "name": "home", "size": 5 }, 
			{ "name": "product", "size": 15 }, 
			{ "name": "search", "size": 20 }, 
			{ "name": "other", "size": 7 }, 
			{ "name": "end", "size": 10 }
		] }, 
		{ "name": "search", "children": [
			{ "name": "account", "size": 10 }, 
			{ "name": "home", "size": 5 }, 
			{ "name": "product", "size": 15 }, 
			{ "name": "search", "size": 20 }, 
			{ "name": "other", "size": 7 }, 
			{ "name": "end", "size": 10 }
		] }, 
		{ "name": "other", "children": [
			{ "name": "account", "size": 10 }, 
			{ "name": "home", "size": 5 }, 
			{ "name": "product", "size": 15 }, 
			{ "name": "search", "size": 20 }, 
			{ "name": "other", "size": 7 }, 
			{ "name": "end", "size": 10 }
		] }, 
		{ "name": "end", "children": [
			{ "name": "account", "size": 10 }, 
			{ "name": "home", "size": 5 }, 
			{ "name": "product", "size": 15 }, 
			{ "name": "search", "size": 20 }, 
			{ "name": "other", "size": 7 }, 
			{ "name": "end", "size": 10 }
		] }
	]
};

// var tempData = { "name":"root", "children":[
// 					{ "name":"account", "children":[
// 							{ "name":"account", "children":[
// 									{ "name":"account", "children":[
// 											{ "name":"account", "children":[
// 													{ "name":"account", "children":[
// 															{ "name":"account", "size":22781},
// 															{ "name":"end", "size":3311},
// 															{ "name":"home", "size":906},
// 															{ "name":"other", "size":1156},
// 															{ "name":"product", "size":5969},
// 															{ "name":"search", "size":692}]},
// 															{ "name":"end", "size":7059},
// 															{ "name":"home", "children":[
// 																	{ "name":"account", "size":396},
// 																	{ "name":"end", "size":316},
// 																	{ "name":"home", "size":226},
// 																	{ "name":"other", "size":87},
// 																	{ "name":"product", "size":613},
// 																	{ "name":"search", "size":245}]},
// 																	{ "name":"other", "children":[
// 																			{ "name":"account", "size":446},
// 																			{ "name":"end", "size":229},
// 																			{ "name":"home", "size":91},
// 																			{ "name":"other", "size":804},
// 																			{ "name":"product", "size":776},
// 																			{ "name":"search", "size":48}]},
// 																			{ "name":"product", "children":[
// 																				{ "name":"account", "size":3892},
// 																				{ "name":"end", "size":3250},
// 																				{ "name":"home", "size":531},
// 																				{ "name":"other", "size":252},
// 																				{ "name":"product", "size":4876},
// 																				{ "name":"search", "size":476}]},
// 																				{ "name":"search", "children":[
// 																					{ "name":"account", "size":521},
// 																					{ "name":"end", "size":39},
// 																					{ "name":"home", "size":7},
// 																					{ "name":"other", "size":8},
// 																					{ "name":"product", "size":536},
// 																					{ "name":"search", "size":219}
// 																				]
// 																				}
// 																				]
// 																			}]}]}]}]};

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
          radius: radius,
          jsonData: jsonData
        };
    },

    getInitialState: function() {
        return {
          data: jsonData
        };
    },

    showAll: function() {
      this.setState({data: jsonData});
    },

    filter: function() {
      this.setState({data: jsonData});
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
                   <Path width={this.props.width}
						height={this.props.height} />
				</Chart>
			</div>
			);
	}
});

module.exports = Dashboard; 