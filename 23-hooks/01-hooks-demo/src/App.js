import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import SimpleFormClass from './SimpleFormClass';
import SimpleFormHooks from './SimpleFormHooks';
import Clicker from './Clicker';
import './App.css';
import SWMovies from './SWMovies';

function App() {
	return (
		<div className="App">
			<CounterClass />
			<CounterHooks />
			<Toggler />
			<SimpleFormClass />
			<SimpleFormHooks />
			<Clicker />
			<SWMovies />
		</div>
	);
}

export default App;
