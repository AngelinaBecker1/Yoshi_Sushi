function openmenu() {
    document.getElementById("menu").style.width = "280px";
    document.querySelector(".tres-barrinhas").style.opacity = "0";
    document.body.style.overflow = "hidden";
}

function closemenu() {
    document.getElementById("menu").style.width = "0";
    document.querySelector(".tres-barrinhas").style.opacity = "1";
    document.body.style.overflow = "auto";
}

document.addEventListener('click', function (event) {
    const menu = document.getElementById('menu');
    const btn = document.querySelector('.tres-barrinhas');

    if (!menu.contains(event.target) && event.target !== btn && !btn.contains(event.target)) {
        closemenu();
    }
});
