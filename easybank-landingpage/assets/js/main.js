const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fade = document.querySelectorAll('.fade');
const body = document.querySelector("body");



//toggle hamburger menu
btnHamburger.addEventListener('click', function() {
    if(header.classList.contains('open')) { //hide menu
        header.classList.remove('open');

        fade.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        }); 
        body.classList.remove('no-scroll');
    }
    else {  //show menu
        header.classList.add('open');

        fade.forEach(function (element) {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
        });
        body.classList.add('no-scroll');
    }
});