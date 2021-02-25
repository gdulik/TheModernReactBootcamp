import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
	render() {
		const { id, name, type, base_experience } = this.props;
		return (
			<div className="Pokecard">
				<h2 className="Pokecard-title">{name}</h2>
				<img
					className="Pokecard-img"
					src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
				/>
				<div className="Pokecard-text">
					<p>Type: {type}</p>
					<p>EXP: {base_experience}</p>
				</div>
			</div>
		);
	}
}

export default Pokecard;
