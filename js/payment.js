import { username } from './auth.js';
let orderDetail = JSON.parse(sessionStorage.getItem('cart'));
let form = document.querySelector('form');

let data = {
	user: username,
	address: null,
	orderDetails: orderDetail,
};
let total = data.orderDetails((initial, orderDetail, index) => {
	return initial + orderDetail.product.price * orderDetail.amount;
}, 0);
console.log(total.orderDetails);

if (form) {
	form.innerHTML = '';
	form.innerHTML += `
		<h2>Chi tiết hóa đơn</h2>
		<div class="input-group">
			<label for="username">Tài khoản :</label>
			<input type="text" placeholder="${data.user}" id="username" name="username" disabled>
		</div>
		<div class="input-group">
			<label for="address">Địa chỉ :</label>
			<input type="text" placeholder="vui lòng nhập địa chỉ" id="address" required>
		</div>
		<div class="list-product">
			<div class="product">
				<img src="../images/wallpaper/backgroudHome.jpg" alt="">
				<div class="info">
					<p class="amount">2</p>
					<p class="price">100,000 vnd</p>
				</div>
			</div>
		</div>
		<div class="text-group">
			<p>Tổng tiền : </p>
			<span>30,000 VND</span>
		</div>
		<div class="text-group">
			<p>Tiền ship : </p>
			<span>30,000 VND</span>
		</div>

		<hr>
		<div class="text-group">
			<p>Hóa đơn : </p>
			<span>180,000 VND</span>
		</div>
		<div class="button-group">
			<button>Xác nhận mua hàng</button>
		</div>
	`;
}

form.onsubmit = (e) => {
	e.preventDefault();
	data.address = form.querySelector('#address').value;
	console.log(data);
};
