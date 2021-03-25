import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function EditTodoForm({ id, task, editTodo, toggleIsEditing }) {
	const [ value, handleValueChange, reset ] = useInputState(task);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				editTodo(id, value);
				reset();
				toggleIsEditing();
			}}
			style={{ marginLeft: '1rem', width: '50%' }}
		>
			<TextField
				margin="normal"
				value={value}
				onChange={handleValueChange}
				fullWidth
				autoFocus
			/>
		</form>
	);
}

export default EditTodoForm;
