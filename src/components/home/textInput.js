"use strict"; 

var React = require('react'); 

var TextInput = React.createClass({
	
	render: function () {

		return (
				<div style={{margin: "auto"}}>
					<div>
						<textarea style={{backgroundColor: "rgba(255,255,255,0.85)", marginTop: "30px", marginBottom: "30px"}}
							rows={8}
							cols={80}
							placeholder={this.props.placeholder}
							ref={this.props.name}
							value={this.props.value}
							onChange={this.props.onChange} />
					</div>
				</div>
			);
	}
});

module.exports = TextInput; 