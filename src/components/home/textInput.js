"use strict"; 

var React = require('react'); 

var TextInput = React.createClass({
	
	render: function () {

		return (
				<div style={{margin: "auto"}}>
					<div>
						<textarea rows={8}
							cols={80}
							placeholder={this.props.placeholder}
							ref={this.props.name}
							value={this.props.value} />
					</div>
				</div>
			);
	}
});

module.exports = TextInput; 