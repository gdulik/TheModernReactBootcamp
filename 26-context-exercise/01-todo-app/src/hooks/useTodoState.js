import useLocalStorageState from './useLocalStorageState';

function useTodoState(initialTodos) {
	const [ todos, setTodos ] = useLocalStorageState('todos', initialTodos);
	return {
		todos
	};
}

export default useTodoState;
