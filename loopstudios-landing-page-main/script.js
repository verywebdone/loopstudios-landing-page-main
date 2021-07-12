let burger = document.querySelector(".burger");
let closeX = document.querySelector(".close");
let sideNavMenu = document.querySelector(".navMobileMenu");
let icon = document.querySelector(".iconMenu");

let test = true;

let sideMenu = () => {
    sideNavMenu.classList.toggle("open");
    if(test){
        burger.classList.replace("visible", "hide");
        closeX.classList.replace("hide", "visible");
        test = false;
        console.log("first:",test)
    }   else {
        burger.classList.replace("hide", "visible");
        closeX.classList.replace("visible", "hide");
        test = true;
        console.log("second:", test)
    }
    console.log("third:", test)
}

icon.addEventListener("click", sideMenu);