import React, { Component } from 'react';

class Clicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		const rand = Math.floor(Math.random() * 10) + 1;
		this.setState({ num: rand });
	}

	render() {
		const { num } = this.state;
		return (
			<div>
				<h1>Number is {num}</h1>
				{num === 7 ? (
					<h2>YOU WIN!</h2>
				) : (
					<button onClick={this.handleClick}>Random Number</button>
				)}
			</div>
		);
	}
}

export default Clicker;
