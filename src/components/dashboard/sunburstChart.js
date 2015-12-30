"use strict"; 

var React = require('react'); 
// var d3Chart = require('./d3Chart');

var SunburstChart = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired
  },

  // componentDidMount: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.create(el, {
  //     width: '100%',
  //     height: '300px'
  //   }, this.getChartState());
  // },

  // componentDidUpdate: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.update(el, this.getChartState());
  // },

  // getChartState: function() {
  //   return {
  //     data: this.props.data,
  //     domain: this.props.domain
  //   };
  // },

  // componentWillUnmount: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.destroy(el);
  // },

  render: function() {
    return (
         <svg width={this.props.width} 
                 height={this.props.height}
                 style={{float: "left"}} >
              {this.props.children}
          </svg> 
    );
  }
});

module.exports = SunburstChart; 