import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const mobileMenu = document.querySelector('.js-menu-container') as HTMLElement
const openMenuBtn = document.querySelector('.js-open-menu') as HTMLButtonElement;
const closeMenuBtn = document.querySelector('.js-close-menu') as HTMLButtonElement

function toggleMenu() {
const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', (!isMenuOpen).toString());
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? disableBodyScroll : enableBodyScroll;
    scrollLockMethod(document.body);
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', 'false');
    enableBodyScroll(document.body);
});