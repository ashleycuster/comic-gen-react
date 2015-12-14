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

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },

  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },

  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};


var Path = React.createClass({
    mixins: [SetIntervalMixin], 

    getDefaultProps: function() {
        return {
            width: 0,
            height: 0,
            x: 0,
            y: 0
        };
    },

    getInitialState: function() {
      return {
        milliseconds: 0,
        height: 0
      };
    },

    shouldComponentUpdate: function(nextProps) {
      return this.props.endAngle !== this.state.endAngle;
    },

    componentWillMount: function() {
      console.log('will mount');
    },

    componentWillReceiveProps: function(nextProps) {
      this.setState({milliseconds: 0, height: this.props.height});
    },

    componentDidMount: function() {
      this.setInterval(this.tick, 10);
    },

    tick: function(start) {
      this.setState({milliseconds: this.state.milliseconds + 10});
    },

    render: function() {
      console.log(this.props.data); 
      var arc = d3.svg.arc()
                      .startAngle(function(d) { return d.x; })
                      .endAngle(function(d) { return d.x + d.dx; })
                      .innerRadius(function(d) { return Math.sqrt(d.y); })
                      .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

      var display = this.props.data.depth ? null : "none";
      var fill = colors[this.props.data.name]; 

      var partition = d3.layout.partition()
                                .size([2 * Math.PI, this.props.radius * this.props.radius])
                                .value(function(d) { return d.size; });

      return (
        <path className="path"
          display={display}
          d={arc(this.props.data)}
          fill-rule={"evenodd"}
          fill={fill}
          fillOpacity={1} >
        </path>
        );
    }
});

module.exports = Path; 