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
		if (newFlip) {
			this.setState((curState) => ({
				heads: curState.heads + 1,
				flip: newFlip
			}));
		} else {
			this.setState((curState) => ({
				tails: curState.tails + 1,
				flip: newFlip
			}));
		}
	}

	render() {
		return (
			<div>
				<h1>Let's flip a coin!</h1>
				<div>
					<Coin
						imgUrl={this.state.flip ? head : tail}
						alt={this.state.flip ? 'head' : 'tail'}
					/>
				</div>
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
