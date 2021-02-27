import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	static defaultProps = {
		sides: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};

	constructor(props) {
		super(props);
		this.state = {
			die1: 'one',
			die2: 'one',
			isRolling: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		const newDie1 = this.props.sides[
			Math.floor(Math.random() * this.props.sides.length)
		];
		const newDie2 = this.props.sides[
			Math.floor(Math.random() * this.props.sides.length)
		];
		this.setState({
			die1: newDie1,
			die2: newDie2,
			isRolling: true
		});
		setTimeout(() => {
			this.setState({ isRolling: false });
		}, 600);
	}

	render() {
		const { die1, die2, isRolling } = this.state;
		return (
			<div className="RollDice">
				<div className="RollDice-container">
					<Die face={die1} isRolling={isRolling} />
					<Die face={die2} isRolling={isRolling} />
				</div>
				<button
					onClick={this.handleClick}
					disabled={this.state.isRolling}
				>
					{this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
				</button>
			</div>
		);
	}
}

export default RollDice;
