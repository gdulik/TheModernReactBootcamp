import Timer from './Timer';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';
import './App.css';

function App() {
	return (
		<div className="App">
			{/* <Timer /> */}
			{/* <ZenQuote /> */}
			<GithubUserInfo username="facebook" />
			<GithubUserInfo username="gdulik" />
			<GithubUserInfo username="colt" />
		</div>
	);
}

export default App;
