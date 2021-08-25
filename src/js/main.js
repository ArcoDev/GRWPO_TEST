window.addEventListener('DOMContentLoaded', function() {
    navMovil();
});

function navMovil() {
    const menu = document.querySelector('.menu');
    if(menu) {
        menu.addEventListener('click', function() {
            alert("Anima menur");
        });
    }
}