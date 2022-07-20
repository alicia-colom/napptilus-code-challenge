import Header from './components/header/Header';
import CataloguePage from './pages/CataloguePage';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<CataloguePage />
			</main>
		</div>
	);
}

export default App;
