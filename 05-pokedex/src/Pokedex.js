import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		const pokemons = this.props.pokemon.map((p) => (
			<Pokecard
				id={p.id.toString().padStart(3, '0')}
				name={p.name}
				type={p.type}
				base_experience={p.base_experience}
			/>
		));
		let title;
		if (this.props.isWinner) {
			title = <h1 className="Pokedex-winner">Winning Hand</h1>;
		} else {
			title = <h1 className="Pokedex-loser">Losing Hand</h1>;
		}
		return (
			<div className="Pokedex">
				{title}
				<h4>Total Experience: {this.props.exp}</h4>
				<div className="Pokedex-cards">{pokemons}</div>
			</div>
		);
	}
}

export default Pokedex;
