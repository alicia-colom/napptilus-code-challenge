import Header from './components/Header';
import CataloguePage from './pages/CataloguePage';
import './styles/App.scss';

function App() {
	return (
		<div className='App'>
			<Header />
			<main className='main'>
				<CataloguePage />
			</main>
		</div>
	);
}

export default App;
