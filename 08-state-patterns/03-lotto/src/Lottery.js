import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
	static defaultProps = {
		title: 'Lotto',
		numBalls: 6,
		maxNum: 40
	};

	constructor(props) {
		super(props);
		this.state = {
			nums: Array.from({ length: this.props.numBalls })
		};
		this.handleClick = this.handleClick.bind(this);
	}

	generate() {
		// let newNums = [];
		// for (let i = 0; i < this.props.numBalls; i++) {
		// 	newNums = [
		// 		...newNums,
		// 		Math.floor(Math.random() * this.props.maxNum) + 1
		// 	];
		// }
		// this.setState({ nums: newNums });

		this.setState((curState) => ({
			nums: curState.nums.map(
				(n) => Math.floor(Math.random() * this.props.maxNum) + 1
			)
		}));
	}

	handleClick(e) {
		this.generate();
	}

	render() {
		const balls = this.state.nums.map((b) => <Ball num={b} />);
		return (
			<section className="Lottery">
				<h1>{this.props.title}</h1>
				<div>{balls}</div>
				<button onClick={this.handleClick}>Generate</button>
			</section>
		);
	}
}

export default Lottery;
