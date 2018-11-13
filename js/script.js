document.addEventListener('DOMContentLoaded', function () {
    var year = document.getElementById('year');
    var menuButton = document.querySelector('.menu-button');
    var menu = document.querySelector('.menu');
    var now = new Date();
    year.innerHTML = now.getFullYear() + '';
    onScroll();
    window.onscroll = onScroll;
    menuButton.addEventListener('click', onMenuOpen);
    menu.addEventListener('click', onMenuClose);
});

function onMenuOpen() {
    var menu = document.querySelector('.menu');
    menu.style.left = '0';
}

function onMenuClose() {
    var menu = document.querySelector('.menu');
    menu.style.left = '-300px';
}

function onScroll() {
    var header = document.querySelector('.header');
    var headerTitle = document.querySelector('.header-title');
    var size = 0.9 * screen.height;
    if (document.body.scrollTop > size || document.documentElement.scrollTop > size) {
        header.classList.add('shadow');
        header.style.backgroundColor = 'var(--dark)';
        headerTitle.style.color = 'var(--light)';
    } else {
        header.classList.remove('shadow');
        header.style.backgroundColor = 'transparent';
        headerTitle.style.color = 'transparent';
    }
}
