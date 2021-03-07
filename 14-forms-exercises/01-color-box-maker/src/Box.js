import React, { Component } from 'react';

class Box extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.removeBox(this.props.box.id);
	}

	render() {
		const { box } = this.props;
		const style = {
			width: `${box.width}px`,
			height: `${box.height}px`,
			backgroundColor: box.color,
			marginLeft: 'auto',
			marginRight: 'auto'
		};
		return (
			<div>
				<div style={style} />
				<button onClick={this.handleClick}>Remove Box!</button>
			</div>
		);
	}
}

export default Box;
