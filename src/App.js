import Header from './components/Header';
import Footer from './components/Footer';
import CataloguePage from './pages/CataloguePage';
import './styles/App.scss';

function App() {
	return (
		<div className='App'>
			<Header />
			<main className='main'>
				<CataloguePage />
			</main>
			<Footer/>
		</div>
	);
}

export default App;
