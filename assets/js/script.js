let boolean = 0;

document.getElementById('hamburguer').addEventListener('click', ()=> {
    let topLine = document.getElementById('top-line');
    let mainLine = document.getElementById('main-line');
    let bottomLine = document.getElementById('bottom-line');
    let menuMobile = document.getElementById('menuMobile');

    /* -----===[ MENU-HAMBURGUER ANIMATION ]===----- */

    if (boolean == 0) {
        bottomLine.style.display = 'none';
        topLine.style.rotate = '45deg';
        mainLine.style.rotate = '-45deg';
        mainLine.style.marginTop = '-11px';
        menuMobile.style.marginTop = '50px';
        boolean = 1;
    } else {
        bottomLine.style.display = 'block';
        topLine.style.rotate = '0deg';
        mainLine.style.rotate = '0deg';
        mainLine.style.marginTop = '0px';
        menuMobile.style.marginTop = '-600px';
        boolean = 0;
    }

    /* -----===================================----- */
});