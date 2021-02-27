import './App.css';

import Game from './Game.js';
import Rando from './Rando.js';
import Button from './Button.js';
import Clicker from './Clicker.js';

function App() {
	return (
		<div className="App">
			<Game />
			<Rando maxNum={7} />
			<Button />
			<Clicker />
		</div>
	);
}

export default App;
