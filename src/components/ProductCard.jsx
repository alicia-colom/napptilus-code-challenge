import React from 'react';

const ProductCard = ({ product }) => {
	return (
		<>
			<h3>{product.brand + ' ' + product.model}</h3>
			<img src={product.imgUrl} alt={product.brand + ' ' + product.model} />
			<div>
				<small>{product.id}</small>
				<div>{product.price} €</div>
			</div>
		</>
	);
};

export default ProductCard;
