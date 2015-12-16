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

// Mapping of step names to colors.
var colors = {
  "fruit": "#5687d1",
  "berry": "#7b615c",
  "food": "#de783b",
  "vegetable": "#6ab975",
  "green": "#6ab975",
  "red": "#bbbbbb",
  "stone": "#de783b",
  "grain": "#7b615c",
  "wheat": "#de783b",
  "barley": "#5687d1", 
  "rice": "#bbbbbb",
  "tan": "#7b615c",
  "brown": "#7b615c",
  "broccoli": "#6ab975",
  "kale": "#a173d1",
  "black": "#bbbbbb",
  "blue": "#5687d1",
  "orange": "#de783b",
  "purple": "#a173d1",
  "strawberry": "#7b615c",
  "raspberry": "#6ab975",
  "blackberry": "#bbbbbb",
  "blueberry": "#5687d1",
  "apricot": "#de783b",
  "peach": "#bbbbbb",
  "plum": "#bbbbbb"
};

var colorsDHS = {
  "customs": "#046b99",
  "citizenship": "#00a6d2",
  "coastguard": "#9bdaf1",
  "fema": "#cd2026",
  "immigration": "#981b1e",
  "secretservice": "#cd2026",
  "tsa": "#e59393"
};

var colorsTools = {
  "score": "#0071bc",
  "tools": "#205493",
  "info": "#112e51",
  "options": "#212121"
};

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

    render: function() {
      if (this.props.arcData.array.length < 1) {
        return (<g></g>);
      }
      else {
        return (
          <g className="chart" width={this.props.width} height={this.props.height} transform={"translate(" + this.props.width / 2 + "," + this.props.height / 2 + ")"}>
            { this.props.arcData.array.map(this.renderPaths) }
          </g>
        );
      }
    }, 

    renderPaths: function (node) {
      var props = {
        display: node.depth ? null : "none", 
        d: this.props.arc(node), 
        "fill-rule": "evenodd",
        stroke: "#fff",
        fillOpacity: node.name !== "root" ? 1 : 0, 
        // fill: colors[node.name],
        fill: node.name in colorsDHS ? colorsDHS[node.name] : colorsTools[node.name],
        key: uuid.v4()
      };
      return (
        <path {...props} fill-rule="evenodd"></path>
      );
    }
});

module.exports = Path;