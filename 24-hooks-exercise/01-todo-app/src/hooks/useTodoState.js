import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function useTodoState(initialTodos) {
	const [ todos, setTodos ] = useState(initialTodos);
	return {
		todos,
		addTodo: (newTodoText) => {
			setTodos([
				...todos,
				{ id: uuid(), task: newTodoText, completed: false }
			]);
		},
		removeTodo: (id) => {
			const updatedTodos = todos.filter((todo) => todo.id !== id);
			setTodos(updatedTodos);
		},
		toggleTodo: (id) => {
			const updatedTodos = todos.map(
				(todo) =>
					todo.id === id
						? { ...todo, completed: !todo.completed }
						: todo
			);
			setTodos(updatedTodos);
		},
		editTodo: (id, newTask) => {
			const updatedTodos = todos.map(
				(todo) => (todo.id === id ? { ...todo, task: newTask } : todo)
			);
			setTodos(updatedTodos);
		}
	};
}

export default useTodoState;
