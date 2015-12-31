"use strict"; 

var React = require('react'); 
var SunburstStore = require('../../stores/sunburstStore');
var Path = require('./path');
var Info = require('./info');
var d3 = require('d3');
var DashboardApi = require('../../api/dashboardApi');


var SunburstChart = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    radius: React.PropTypes.number.isRequired
  },

  getInitialState: function () {
    return {
      agencyName: "Agency Name",
      riskScore: "",
      highlightedNodes: [],
      arcData: {}
    };
  },

  componentWillMount: function () {
    SunburstStore.addChangeListener(this._onChange);

    var vm = this;

    DashboardApi.getData(vm.props.radius, function (newArcData) {
      var setArcData = {json: {}, array: []};
      setArcData.json = newArcData.json; 
      setArcData.array = newArcData.array;
      vm.setState({arcData: setArcData});
    });
  },

  componentWillUnmount: function () {
    SunburstStore.removeChangeListener(this._onChange); 
  },

  _onChange: function () {
    var highlightedNodes = SunburstStore.getHighlightedNodes();
    var agencyName = highlightedNodes[0].name;
    var riskScore = DashboardApi.dhsAgencyRiskScores[agencyName];
    this.setState({agencyName: agencyName.toUpperCase(), riskScore: riskScore, highlightedNodes: highlightedNodes});
  },

  render: function() {
    if (this.state.arcData.array === undefined) {
      return (<div />);
    }
    return (
        <div>
         <svg width={this.props.width} height={this.props.height} style={{float: "left"}} >
              <Path height={this.props.height}
                    width={this.props.width}
                    radius={this.props.radius}
                    arcData={this.state.arcData}
                    highlightedNodes={this.state.highlightedNodes} />
          </svg>
          <Info marginLeft={this.props.width}
                agencyName={this.state.agencyName}
                highlightedNodes={this.state.highlightedNodes} />
        </div>
    );
  }
});

module.exports = SunburstChart; 