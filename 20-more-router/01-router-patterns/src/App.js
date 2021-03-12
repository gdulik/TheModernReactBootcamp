import Food from './Food';
import Meal from './Meal';
import FoodSearch from './FoodSearch';
import Navbar from './Navbar';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route
					exact
					path="/food/:name"
					render={(routeProps) => <Food {...routeProps} />}
				/>
				<Route
					exact
					path="/food/:foodName/drink/:drinkName"
					component={Meal}
				/>
				<Route
					exact
					path="/"
					render={(routeProps) => <FoodSearch {...routeProps} />}
				/>
				<Route render={() => <h1>ERROR NOT FOUND!!!</h1>} />
			</Switch>
		</div>
	);
}

export default App;
