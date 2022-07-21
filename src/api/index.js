const URL = 'https://front-test-api.herokuapp.com/api/';

export const getCatalogue = async () => {
	try {
		const response = await fetch(URL + 'product');
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export const getProductDetail = async (idProduct) => {
	try {
		const response = await fetch(URL + 'product/' + idProduct);
		console.log('*** Response getProductDetail:', response);
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export const updateCart = async (productDetail) => {
	try {
		const response = await fetch(URL + 'cart', {
			method: 'POST',
			body: JSON.stringify(productDetail),
			headers: { 'content-type': 'application/json' },
		});
		console.log('*** Response updateCart:', response);
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};
