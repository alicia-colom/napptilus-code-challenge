import React from 'react';

const SearchBar = ({ term }) => {
	return (
		<>
			<div>SearchBar component to filter products {term || 'empty'}</div>
		</>
	);
};

export default SearchBar;
