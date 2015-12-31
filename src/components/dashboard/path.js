/*
 *
 * This code was modified from the example found at http://bl.ocks.org/kerryrodden/7090426
 * which is covered by the Apache v2.0 License. A copy of this license is as follows:
 *    --- BEGIN ---
 *    Copyright 2013 Google Inc. All Rights Reserved.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 *  --- END ---
 * Developers: Do not remove this notification or license.
 */

"use strict"; 

var React = require('react'); 
var d3 = require('d3'); 
var _ = require('lodash');
var uuid = require('node-uuid');
var DashboardApi = require('../../api/dashboardApi');
var SunburstActions = require('../../actions/sunburstActions');
var SunburstStore = require('../../stores/sunburstStore');


var arc = d3.svg.arc()
            .startAngle(function(d) { return d.x; })
            .endAngle(function(d) { return d.x + d.dx; })
            .innerRadius(function(d) { return Math.sqrt(d.y); })
            .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });



var Path = React.createClass({
  propTypes: {
    height: React.PropTypes.number.isRequired, 
    width: React.PropTypes.number.isRequired,
    radius: React.PropTypes.number, 
    arcData: React.PropTypes.object.isRequired
  },

    getDefaultProps: function () { 
      return {
        arc: arc
      };
    },

    getInitialState: function () {
      return {
        fillOpacity: 1,
        highlightedNodes: []
      };
    },

    // componentWillMount: function () {
    //   CircleChartStore.addChangeListener(this._onChange);
    // },

    // componentWillUnmount: function () {
    //   CircleChartStore.removeChangeListener(this._onChange); 
    // },

    // _onChange: function () {
    //   this.setState({ highlightedNodes: CircleChartStore.getHighlightedNodes() }); 
    // },

    // Given a node in a partition layout, return an array of all of its ancestor
    // nodes, highest first, but excluding the root.
    getAncestors: function (node) {
      var path = [];
      var current = node;
      while (current.parent) {
        path.unshift(current.name);
        current = current.parent;
      }
      return path;
    },

    handleMouseLeave: function (event) {
      console.log('mouseleave g element');
      console.log(event.type);
    },

    render: function() {
      if (this.props.arcData.array.length < 1) {
        return (<g></g>);
      }
      else {
        return (
          <g className="chart" 
              width={this.props.width} 
              height={this.props.height}
              transform={"translate(" + this.props.width / 2 + "," + this.props.height / 2 + ")"} >
              { this.props.arcData.array.map(this.renderPaths) }
          </g>
        );
      }
    },

    onPathMouseOver: function (node) {
      var nodes = this.getAncestors(node);
      this.setState({fillOpacity: 0.3, highlightedNodes: nodes});
    },

    renderPaths: function (node) {
      var vm = this;
      var props = {
        display: node.depth ? null : "none", 
        d: this.props.arc(node), 
        "fill-rule": "evenodd",
        stroke: "#fff",
        fillOpacity: vm.state.highlightedNodes.indexOf(node.name) >= 0 ? 1 : vm.state.fillOpacity,
        fill: node.name !== "root" ? DashboardApi.calculateColor(node.name) : "#ffffff",
        key: uuid.v4(),
        onMouseOver: (function (selectedNode) {return function () { vm.onPathMouseOver(selectedNode); }; })(node)
      };
      return (
        <path {...props} fill-rule="evenodd"></path>
      );
    }
});

module.exports = Path;