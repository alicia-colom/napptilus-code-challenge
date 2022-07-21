import { FlexBox } from 'react-styled-flex';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import CataloguePage from './pages/CataloguePage';
import ProductPage from './pages/ProductPage';
import './styles/App.scss';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<FlexBox as='main' column center className='main'>
				<Routes>
					<Route exact path='/' element={<CataloguePage />} />
					<Route exact path='/product/:id' element={<ProductPage />} />
				</Routes>
			</FlexBox>
			<Footer />
		</div>
	);
};

export default App;
