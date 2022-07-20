import logo from './logo.svg';
import Header from './components/header/Header';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<img src={logo} className='App-logo' alt='logo' />
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</main>
		</div>
	);
}

export default App;
