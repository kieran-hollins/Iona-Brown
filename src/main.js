let burger = document.getElementsByClassName("hamburger")[0];
let menuBg = document.getElementsByClassName("menu-bg")[0];
let homeBg = document.getElementById("home-bg");
let menuToggle = false;

burger.addEventListener("click", openMenu);

function openMenu() {
    if (!menuToggle) {
        menuBg.style.color = "white";
        let op = 0.1; // initial opacity
        menuBg.style.opacity = op;
        menuBg.style.display = "flex";
        homeBg.style.display = "flex";

        let timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            menuBg.style.opacity = op;
            menuBg.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += 0.1;
        }, 500);

        menuToggle = true;
    }

    else {
        let op = 0.1;
        menuBg.style.opacity = op;
        menuBg.style.display = "none";

        menuToggle = false;
    }
    
}