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
