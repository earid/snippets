/* Snipppet 1 ----- slide chaneg on image */
function funName(funParam) {
    document.querySelector('.demo').src = funParam;
}

HTML >> onclick = "funParam('image/link.png');"

/* Snipppet 2 ----- change bg color */

function funName(funParam) {
    const sec = document.querySelector('.sec');
    sec.style.background = funParam;
}
HTML >> onclick = "funName('#FFF');"

/* Snipppet 3 ----- insert a class with jQuery / Menu toggle*/

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    menuToggle.classList.toggle('active')

    /* Sticky header function */
    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    });

    /* add active class */
    let sideBar = document.querySelector('.container .sidebar');

    document.querySelector('#menu-btn').onclick = () => {
        sideBar.classList.toggle('active');
    };
