let burger = document.getElementsByClassName("hamburger")[0];
let menuBg = document.getElementsByClassName("menu-bg")[0];

burger.addEventListener("click", openMenu);

function openMenu() {
    menuBg.style.color = "white";
    let op = 0.1; // initial opacity
    menuBg.style.opacity = op;
    menuBg.style.display = "grid";

    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);

    
}