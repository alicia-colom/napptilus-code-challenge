import React from 'react';
import SearchBar from './SearchBar';
import '../styles/Header.scss';

const Header = () => {
	return (
		<header className='headerContainer'>
			<div className='preHeader'></div>
			<h1 className='headerTitle'>Napptilus code challenge</h1>
			<SearchBar />
		</header>
	);
};

export default Header;
