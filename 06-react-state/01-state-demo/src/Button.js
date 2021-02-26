import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({ clicked: true });
	}

	// Alternate syntax
	handleUnclick = (e) => {
		this.setState({ clicked: false });
	};

	render() {
		return (
			<div>
				<h1>{this.state.clicked ? 'Clicked!' : 'Not Clicked'}</h1>
				<button onClick={this.handleClick}>Click Me!</button>
				<button onClick={this.handleUnclick}>Unclick Me!</button>
			</div>
		);
	}
}

export default Button;
