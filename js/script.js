var year = document.getElementById('year');
var navbar = document.querySelector('.navbar');
var menu = document.querySelector('.navbar-menu');
var menuIcon = menu.querySelector('i');
var list = document.querySelector('.navbar-list');

document.addEventListener('DOMContentLoaded', onContentLoaded);

function onContentLoaded() {
    var now = new Date();
    year.innerHTML = now.getFullYear() + '';
    onScroll();
    window.onscroll = onScroll;
    menu.addEventListener('click', onMenuClicked);
}

function onScroll() {
    if (navOpened())
        return;
    navBgEnabled(scrolled());
}

function onMenuClicked() {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    list.style.maxHeight = navOpened() ? null : list.scrollHeight + 'px';
    if (!scrolled())
        navBgEnabled(navOpened());
}

function navOpened() {
    return !!list.style.maxHeight;
}

function scrolled() {
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    return scroll >= 200;
}

function navBgEnabled(enabled) {
    if (enabled) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('navbar-bg');
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('navbar-bg');
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('shadow');
    }
}
