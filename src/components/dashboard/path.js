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
  "component1": "#0071bc",
  "component2": "#205493",
  "component3": "#112e51",
  "component4": "#212121",
  "subcomponent1": "#0071bc",
  "subcomponent2": "#205493",
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
  "info": "#205493",
  "tools": "#112e51",
  "options": "#212121"
};

// Calculate color based on number 0-100
// 100 = all red, 50 = half red half green (yellow), 0 = all green
var calculateColor = function (score) {
  score = score % 100;
  var max = 180;
  var red = max; 
  var green = max; 

  var x = score - 50; 
  if ( x > 0 ) {
    green -= max * (x / 50);
  }
  else {
    red += max * (x / 50); 
  }

  var redHex = Math.floor(red).toString(16);
  var greenHex = Math.floor(green).toString(16);
  redHex = redHex.length < 2 ? "0" + redHex : redHex;
  greenHex = greenHex.length < 2 ? "0" + greenHex : greenHex;
  var colorHex = "#" + redHex + greenHex + "00"; 
  return colorHex; 
};

var dhsAgencyRiskScores = {
  "customs": 90,
  "customscomponent1": 80,
  "subcomponent1": 80,
  "subcomponent2": 0,
  "customscomponent2": 5,
  "customscomponent3": 3,
  "customscomponent4": 2,
  "citizenship": 25,
  "citizenshipcomponent1": 10,
  "citizenshipcomponent2": 5,
  "citizenshipcomponent3": 5,
  "citizenshipcomponent4": 5,
  "coastguard": 83,
  "coastguardcomponent1": 2,
  "coastguardcomponent2": 0,
  "coastguardcomponent3": 81,
  "coastguardcomponent4": 0,
  "fema": 58,
  "femacomponent1": 30,
  "femacomponent2": 10,
  "femacomponent3": 10,
  "femacomponent4": 8,
  "immigration": 77,
  "immigrationcomponent1": 40,
  "immigrationcomponent2": 20,
  "immigrationcomponent3": 10,
  "immigrationcomponent4": 7,
  "secretservice": 35,
  "secretservicecomponent1": 20,
  "secretservicecomponent2": 10,
  "secretservicecomponent3": 5,
  "secretservicecomponent4": 0,
  "tsa": 95,
  "tsacomponent1": 65,
  "tsacomponent2": 25,
  "tsacomponent3": 5,
  "tsacomponent4": 0
};

var highlight = ["tsa", "tsacomponent1", "tsacomponent2", "tsacomponent3", "tsacomponent4"];

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
        fillOpacity: highlight.indexOf(node.name) >= 0 ? 1 : 0.25, 
        // fill: colors[node.name],
        // fill: node.name in colorsDHS ? colorsDHS[node.name] : colors[node.name],
        fill: node.name !== "root" ? calculateColor(dhsAgencyRiskScores[node.name]) : "#ffffff",
        key: uuid.v4()
      };
      return (
        <path {...props} fill-rule="evenodd"></path>
      );
    }
});

module.exports = Path;