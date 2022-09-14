import url from './url.js';

let id = sessionStorage.getItem('id')
	? JSON.parse(sessionStorage.getItem('id'))
	: 1;

let getProduct = async (callback) => {
	let res = await fetch(url + `/product/cakes/${id}`);
	let data = await res.json();
	console.log(data);
};

getProduct();
