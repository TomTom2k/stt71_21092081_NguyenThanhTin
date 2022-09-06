import { logout } from './auth.js';

let button = document.querySelector('button');
button.onclick = () => {
	logout();
};
