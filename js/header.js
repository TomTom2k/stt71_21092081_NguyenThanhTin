window.showNavbar = () => {
	let nav = document.querySelector('header nav');
	nav.classList.toggle('active');
};

let header = document.querySelector('header');

header.innerHTML = `
<a href="./index.html" class="logo">
    <p class="text-left"><span>J</span>erry</p>
    <p class="text-right">&emsp;<span>C</span>herry</p>
</a>

<nav class="">
    <ul>
        <li><a href="./index.html">Trang Chủ</a></li>
        <li><a href="./category.html">Danh sách</a></li>
        <li><a href="./contact.html">Liên hệ</a></li>
        <li><a href="./introduce.htm">Giới thiệu</a></li>
        <li><a href="./sitemap.html">SiteMap</a></li>
    </ul>
</nav>
<div class="icons">
    <div><i id="search" class="fas fa-search"></i></div>
    <a href="./cart.html"><i class="fas fa-shopping-cart"></i></a>
    <a href="./login.html"><i class="fas fa-user"></i></a>
    <div><i id="bars" class="fas fa-bars" onclick="showNavbar()"></i></div>
</div>
`;
