import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.addTodo = this.addTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.toggleDone = this.toggleDone.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('IN COMPONENT DID UPDATE');
		console.log(prevState.todos);
		console.log(this.state.todos);
	}

	addTodo(todo) {
		const newTodo = { ...todo, id: uuid(), isDone: false };
		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	}

	editTodo(id, task) {
		this.setState({
			todos: this.state.todos.map(
				(todo) => (todo.id === id ? { ...todo, task } : todo)
			)
		});
	}

	removeTodo(id) {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id)
		});
	}

	toggleDone(id) {
		this.setState({
			todos: this.state.todos.map(
				(todo) =>
					todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		});
	}

	render() {
		const todos = this.state.todos.map((todo) => (
			<Todo
				todo={todo}
				key={todo.id}
				removeTodo={this.removeTodo}
				editTodo={this.editTodo}
				toggleDone={this.toggleDone}
			/>
		));

		return (
			<div className="TodoList">
				<h1>
					Todo List! <span>A simple React Todo List App.</span>
				</h1>
				<ul>{todos}</ul>
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default TodoList;
