import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
	render() {
		return (
			<div
				id={this.props.id}
				className="Box"
				style={{
					backgroundColor: this.props.color
				}}
				onClick={this.props.handleClick}
			/>
		);
	}
}

export default Box;
