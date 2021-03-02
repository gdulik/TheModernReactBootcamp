import React, { Component } from 'react';
import Box from './Box';

class Container extends Component {
	static defaultProps = {
		colors: [
			'AliceBlue',
			'AntiqueWhite',
			'Aqua',
			'Aquamarine',
			'Azure',
			'Beige',
			'Bisque',
			'Black',
			'BlanchedAlmond',
			'Blue',
			'BlueViolet',
			'Brown',
			'BurlyWood',
			'CadetBlue',
			'Chartreuse',
			'Chocolate',
			'Coral',
			'CornflowerBlue',
			'Cornsilk',
			'Crimson',
			'Cyan',
			'DarkBlue',
			'DarkCyan',
			'DarkGoldenRod',
			'DarkGray',
			'DarkGrey',
			'DarkGreen',
			'DarkKhaki',
			'DarkMagenta',
			'DarkOliveGreen',
			'DarkOrange',
			'DarkOrchid',
			'DarkRed',
			'DarkSalmon',
			'DarkSeaGreen',
			'DarkSlateBlue',
			'DarkSlateGray',
			'DarkSlateGrey',
			'DarkTurquoise',
			'DarkViolet',
			'DeepPink',
			'DeepSkyBlue',
			'DimGray',
			'DimGrey',
			'DodgerBlue',
			'FireBrick',
			'FloralWhite',
			'ForestGreen',
			'Fuchsia',
			'Gainsboro',
			'GhostWhite',
			'Gold',
			'GoldenRod',
			'Gray',
			'Grey',
			'Green',
			'GreenYellow',
			'HoneyDew',
			'HotPink',
			'IndianRed',
			'Indigo',
			'Ivory',
			'Khaki',
			'Lavender',
			'LavenderBlush',
			'LawnGreen',
			'LemonChiffon',
			'LightBlue',
			'LightCoral',
			'LightCyan',
			'LightGoldenRodYellow',
			'LightGray',
			'LightGrey',
			'LightGreen',
			'LightPink',
			'LightSalmon',
			'LightSeaGreen',
			'LightSkyBlue',
			'LightSlateGray',
			'LightSlateGrey',
			'LightSteelBlue',
			'LightYellow',
			'Lime',
			'LimeGreen',
			'Linen',
			'Magenta',
			'Maroon',
			'MediumAquaMarine',
			'MediumBlue',
			'MediumOrchid',
			'MediumPurple',
			'MediumSeaGreen',
			'MediumSlateBlue',
			'MediumSpringGreen',
			'MediumTurquoise',
			'MediumVioletRed',
			'MidnightBlue',
			'MintCream',
			'MistyRose',
			'Moccasin',
			'NavajoWhite',
			'Navy',
			'OldLace',
			'Olive',
			'OliveDrab',
			'Orange',
			'OrangeRed',
			'Orchid',
			'PaleGoldenRod',
			'PaleGreen',
			'PaleTurquoise',
			'PaleVioletRed',
			'PapayaWhip',
			'PeachPuff',
			'Peru',
			'Pink',
			'Plum',
			'PowderBlue',
			'Purple',
			'RebeccaPurple',
			'Red',
			'RosyBrown',
			'RoyalBlue',
			'SaddleBrown',
			'Salmon',
			'SandyBrown',
			'SeaGreen',
			'SeaShell',
			'Sienna',
			'Silver',
			'SkyBlue',
			'SlateBlue',
			'SlateGray',
			'SlateGrey',
			'Snow',
			'SpringGreen',
			'SteelBlue',
			'Tan',
			'Teal',
			'Thistle',
			'Tomato',
			'Turquoise',
			'Violet',
			'Wheat',
			'White',
			'WhiteSmoke',
			'Yellow',
			'YellowGreen'
		],
		countBoxes: 16
	};
	constructor(props) {
		super(props);
		this.state = {
			colors: new Array(this.props.countBoxes).fill(null)
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.setState(() => ({
			colors: this.state.colors.map((c) => {
				return this.props.colors[
					Math.floor(Math.random() * this.props.colors.length)
				];
			})
		}));
	}

	handleClick(e) {
		const newColors = [ ...this.state.colors ];
		newColors[e.target.id] = this.props.colors[
			Math.floor(Math.random() * this.props.colors.length)
		];
		this.setState({
			colors: newColors
		});
	}

	render() {
		const boxes = this.state.colors.map((c, idx) => (
			<Box key={idx} id={idx} color={c} handleClick={this.handleClick} />
		));
		return <div>{boxes}</div>;
	}
}

export default Container;
