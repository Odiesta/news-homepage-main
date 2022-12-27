'use strict';

const navOpen = document.querySelector('.nav__toggle');
const navExit = document.querySelector('.nav-mobile__exit');
const nav = document.querySelector('.nav');
const navMobile = document.querySelector('.nav-mobile');
const overlay = document.querySelector('.overlay');

const openToggleMenu = function() {
    navMobile.classList.remove('hidden');
    overlay.classList.add('overlay-nav');
}

const closeToggleMenu = function() {
    navMobile.classList.add('hidden');
    overlay.classList.remove('overlay-nav');
}

navOpen.addEventListener('click', openToggleMenu);
navExit.addEventListener('click', closeToggleMenu);