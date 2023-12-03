const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

/*This is for opening and closing hamburger */
let hamburger=document.getElementsByClassName('hamburger')[0];
let hamburger_close=document.getElementsByClassName('hamburger-close')[0];
let navigation = document.getElementsByClassName('navigation')[0];
console.log(navigation);
function openNav(){
    navigation.style.display = "flex";
    hamburger.style.display="none";
    hamburger_close.style.display = "block";
}
function closeNav(){
    navigation.style.display = "none";
    hamburger.style.display="block";
    hamburger_close.style.display = "none";
}