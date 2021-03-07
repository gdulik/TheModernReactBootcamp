import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			editedTask: this.props.todo.task
		};
		this.handleEdit = this.handleEdit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.renderTodo = this.renderTodo.bind(this);
		this.renderEdit = this.renderEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	toggleForm() {
		this.setState({ isEditing: !this.state.isEditing });
	}
	handleEdit(e) {
		e.preventDefault();
		this.props.editTodo(this.props.todo.id, this.state.editedTask);
		this.toggleForm();
	}

	handleRemove() {
		this.props.removeTodo(this.props.todo.id);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleToggle() {
		this.props.toggleDone(this.props.todo.id);
	}

	renderTodo() {
		return (
			<div className="Todo">
				<li
					onClick={this.handleToggle}
					className={
						this.props.todo.isDone ? (
							'Todo-task completed'
						) : (
							'Todo-task'
						)
					}
				>
					{this.props.todo.task}
				</li>
				<div className="Todo-buttons">
					<button onClick={this.toggleForm}>
						<i className="fas fa-pen" />
					</button>
					<button onClick={this.handleRemove}>
						<i className="fas fa-trash" />
					</button>
				</div>
			</div>
		);
	}

	renderEdit() {
		return (
			<div className="Todo">
				<form className="Todo-edit-form" onSubmit={this.handleEdit}>
					<input
						type="text"
						name="editedTask"
						value={this.state.editedTask}
						onChange={this.handleChange}
					/>
					<button>Save</button>
				</form>
			</div>
		);
	}

	render() {
		const result = this.state.isEditing
			? this.renderEdit()
			: this.renderTodo();
		return result;
	}
}

export default Todo;
