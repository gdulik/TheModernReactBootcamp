import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	static defaultProps = {
		numbers: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.handleClick(this.props.idx);
	}

	render() {
		const { numbers, val, locked, disabled, isRolling } = this.props;
		const classes = `Die fas fa-dice-${numbers[val - 1]} fa-5x ${locked &&
			'Die-locked'} ${isRolling && 'Die-rolling'}`;
		return (
			<i
				className={classes}
				onClick={this.handleClick}
				disabled={disabled}
			/>
		);
	}
}

export default Die;
