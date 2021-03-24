import React from 'react';
import useInputState from './hooks/useInputState';

function SimpleFormHooks() {
	const [ email, updateEmail, resetEmail ] = useInputState('');
	return (
		<div>
			<h1>You entered: {email}</h1>
			<input type="text" value={email} onChange={updateEmail} />
			<button onClick={resetEmail}>Submit</button>
		</div>
	);
}

export default SimpleFormHooks;
