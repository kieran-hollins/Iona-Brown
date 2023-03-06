let burger = document.getElementsByClassName("hamburger")[0];
let menuBg = document.getElementsByClassName("menu-bg")[0];
let homeBg = document.getElementById("home-bg");
let menuToggle = false;

burger.addEventListener("click", openMenu);

function openMenu() {
    if (!menuToggle) {

        let op = 0.1; // initial opacity
        menuBg.style.opacity = op;
        homeBg.style.display = "flex";

        let timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            menuBg.style.opacity = op;
            menuBg.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += 0.1;
        }, 20);

        menuToggle = true;
    }

    else {
        let op = 1;
        menuBg.style.opacity = op;

        let timer = setInterval(function () {
            if (op < 0.1){
                clearInterval(timer);
            }
            menuBg.style.opacity = op;
            menuBg.style.filter = 'alpha(opacity=' - op * 100 + ")";
            op -= 0.1;
        }, 20);

        menuToggle = false;
    }
    
}