import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/todos.context';

function EditTodoForm({ id, task, toggleIsEditing }) {
	const dispatch = useContext(DispatchContext);
	const [ value, handleValueChange, reset ] = useInputState(task);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({ type: 'EDIT', id, newTask: value });
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
