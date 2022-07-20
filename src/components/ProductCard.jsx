import React from 'react';

const ProductCard = ({ idProduct }) => {
	return (
		<>
			<div>Product Card in the list {idProduct}</div>
			{idProduct}
		</>
	);
};

export default ProductCard;
