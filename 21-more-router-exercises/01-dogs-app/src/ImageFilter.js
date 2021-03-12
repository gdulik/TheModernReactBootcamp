import React, { Component } from 'react';
import './ImageFilter.css';

export default class ImageFilter extends Component {
	render() {
		return <div className="ImageFilter">{this.props.children}</div>;
	}
}
