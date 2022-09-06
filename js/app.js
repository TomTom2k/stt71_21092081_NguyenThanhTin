import { username } from './auth.js';

let path = location.pathname;
if (
	!username &&
	(path === '/html/account.html' || path === '/html/cart.html')
) {
	location.pathname = './html/login.html';
}

console.log(username);
