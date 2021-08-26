window.addEventListener('DOMContentLoaded', function() {
    navMovil();
});

function navMovil() {
    const menu = document.querySelector('.menu');
    const links = document.querySelector('.links');
    if(menu) {
        menu.addEventListener('click', function() {
            links.classList.toggle('animaMenu');
        });
    }
}