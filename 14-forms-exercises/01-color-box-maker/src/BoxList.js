import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: []
		};
		this.addBox = this.addBox.bind(this);
		this.removeBox = this.removeBox.bind(this);
	}

	addBox(box) {
		const newBox = { ...box, id: uuid() };
		this.setState((state) => ({ boxes: [ ...state.boxes, newBox ] }));
	}

	removeBox(id) {
		const boxes = this.state.boxes.filter((box) => id !== box.id);
		this.setState({ boxes });
	}

	render() {
		return (
			<div>
				<h1>Box Maker</h1>
				<NewBoxForm addBox={this.addBox} />
				{this.state.boxes.map((box) => (
					<Box box={box} key={box.id} removeBox={this.removeBox} />
				))}
			</div>
		);
	}
}

export default BoxList;
