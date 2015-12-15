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

// Mapping of step names to colors.
var colors = {
  "home": "#5687d1",
  "product": "#7b615c",
  "search": "#de783b",
  "account": "#6ab975",
  "other": "#a173d1",
  "end": "#bbbbbb"
};

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
var buildHierarchy = function (csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("-");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
      // Not yet at the end of the sequence; move down the tree.
      var foundChild = false;
      for (var k = 0; k < children.length; k++) {
        if (children[k]["name"] === nodeName) {
          childNode = children[k];
          foundChild = true;
          break;
        }
      }
      // If we don't already have a child node for this branch, create it.
      if (!foundChild) {
        childNode = {"name": nodeName, "children": []};
        children.push(childNode);
      }
      currentNode = childNode;
    }
    else {
    // Reached the end of the sequence; create a leaf node.
    childNode = {"name": nodeName, "size": size};
    children.push(childNode);
    }
    }
  }
  return root;
};

var arc = d3.svg.arc()
            .startAngle(function(d) { return d.x; })
            .endAngle(function(d) { return d.x + d.dx; })
            .innerRadius(function(d) { return Math.sqrt(d.y); })
            .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });




var Path = React.createClass({

    getInitialState: function () { 
      return {
        nodes: {}, 
        arc: arc, 
        json: {}
      };
    },

    createNodes: function () {
      var vm = this; 
      // Use d3.text and d3.csv.parseRows so that we do not need to have a header
      // row, and can receive the csv as an array of arrays.
      d3.text("data/sample.csv", function(text) {
        var csv = d3.csv.parseRows(text);
        var json = buildHierarchy(csv);
        vm.prepareNodes(json);
      });
    },

    prepareNodes: function (json) {
      var partition = d3.layout.partition()
                          .size([2 * Math.PI, this.props.radius * this.props.radius])
                          .value(function(d) { return d.size; });

      // For efficiency, filter nodes to keep only those large enough to see.
      var nodes = partition.nodes(json)
          .filter(function(d) {
          return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
          });

      var updateArc = this.state.arc(json); 

      this.setState({arc: updateArc, json: json, nodes: nodes});

      return; 
    },

    componentWillMount: function () {
      this.createNodes(); 
    },

    render: function() {
      var display = this.state.nodes.depth ? null : "none";
      var fill = colors[this.state.json.name]; 
    
      return (
        <g width={this.props.width} height={this.props.height} transform={"translate(" + this.props.width / 2 + "," + this.props.height / 2 + ")"}>
          <path
            display={this.state.json.depth ? null : "none"}
            d={this.state.arc}
            fill-rule={"evenodd"}
            fill={fill}
            fillOpacity={1} >
          </path>
        </g>
        );
    }
});

module.exports = Path; 