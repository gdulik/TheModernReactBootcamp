import React, { Component } from 'react';
import Coin from './Coin';
import head from './head.jpg';
import tail from './tail.jpg';

class CoinFlipper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flip: null,
			heads: 0,
			tails: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		const newFlip = Math.floor(Math.random() * 2);
		this.setState((curState) => ({
			heads: curState.heads + (newFlip ? 1 : 0),
			tails: curState.tails + (newFlip ? 0 : 1),
			flip: newFlip
		}));
	}

	render() {
		return (
			<div>
				<h2>Let's flip a coin!</h2>
				<Coin
					imgUrl={this.state.flip ? head : tail}
					alt={this.state.flip ? 'head' : 'tail'}
				/>
				<button onClick={this.handleClick}>FLIP ME</button>
				<p>
					Out of {this.state.heads + this.state.tails} flips, there
					have been {this.state.heads} heads and {this.state.tails}{' '}
					tails.
				</p>
			</div>
		);
	}
}

export default CoinFlipper;
