import React, { Component } from 'react';

class AlphaButtons extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onClick(this.props.value);
	}

	render() {
		return (
			<button
				className={this.props.className}
				disabled={this.props.disabled}
				onClick={this.handleClick}
			>
				{this.props.value}
			</button>
		);
	}
}

export default AlphaButtons;
