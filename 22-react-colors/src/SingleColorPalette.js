import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

export default class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: 'hex'
		};
		this._shades = this.gatherShades(
			this.props.palette,
			this.props.colorId
		);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeFormat(format) {
		this.setState({ format });
	}

	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		const allColors = palette.colors;
		for (const key in allColors) {
			shades = shades.concat(
				allColors[key].filter((color) => color.id === colorToFilterBy)
			);
		}
		return shades.slice(1);
	}
	render() {
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				name={color.name}
				background={color[format]}
				showingFullPalette={false}
			/>
		));
		return (
			<div className="SingleColorPalette Palette">
				<Navbar
					handleChange={this.changeFormat}
					showingAllColors={false}
				/>
				<div className="Palette-colors">
					{colorBoxes}
					<div className="go-back ColorBox">
						<Link to={`/palette/${id}`} className="back-button">
							Go back
						</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
