const list_icon = document.getElementById("header_list_icon");
const close_icon = document.getElementById("aside__close_icon");
const aside_menu = document.getElementById("aside_menu");
const header_dark_button_moon = document.getElementById("header_dark_button_moon");
const header_dark_button_sun = document.getElementById("header_dark_button_sun");
const aside_dark_button_moon = document.getElementById("aside_dark_button_moon");
const aside_dark_button_sun = document.getElementById("aside_dark_button_sun");
const logo_light = document.getElementById("logo_light");
const logo_dark = document.getElementById("logo_dark");
const header = document.getElementById("header");
const body = document.getElementById("body");
const header_menu = document.getElementById("header_menu");
const header_menu_options_aditionally = document.querySelectorAll(".header__nav__menu__li");
const article_slogan = document.getElementById("article_slogan");
const article_title = document.getElementById("article_title");

list_icon.addEventListener("click", () => {
    aside_menu.style.width = "500px";
    aside_menu.style.paddingTop = "15px";
    aside_menu.style.paddingLeft = "100px";
});

close_icon.addEventListener("click", () => {
    aside_menu.style.width = "0";
    aside_menu.style.paddingTop = "0";
    aside_menu.style.paddingLeft = "0";
});

header_dark_button_moon.addEventListener("click", () => HabilitarDarkMode(true));

header_dark_button_sun.addEventListener("click", () => HabilitarDarkMode(false));

aside_dark_button_moon.addEventListener("click", () => HabilitarDarkMode(true));

aside_dark_button_sun.addEventListener("click", () => HabilitarDarkMode(false));

function HabilitarDarkMode(darkMode = false){
    CambiarBotonDarkMode(darkMode);
    if (darkMode) {
        CambiarPaginaDarkMode();
    }else{
        CambiarPaginaLightMode();
    }
}

function CambiarBotonDarkMode(darkMode){
    header_dark_button_moon.classList.remove("header__nav__dark-button--moon");
    header_dark_button_moon.classList.remove("header__nav__dark-button--moon--active");
    header_dark_button_sun.classList.remove("header__nav__dark-button--sun");
    header_dark_button_sun.classList.remove("header__nav__dark-button--sun--inactive");

    aside_dark_button_moon.classList.remove("aside__menu--dark-button-container__dark-button--moon");
    aside_dark_button_moon.classList.remove("aside__menu--dark-button-container__dark-button--moon--active");
    aside_dark_button_sun.classList.remove("aside__menu--dark-button-container__dark-button--sun");
    aside_dark_button_sun.classList.remove("aside__menu--dark-button-container__dark-button--sun--inactive");
    if (darkMode) {
        header_dark_button_moon.classList.add("header__nav__dark-button--moon--active");
        header_dark_button_sun.classList.add("header__nav__dark-button--sun--inactive");

        aside_dark_button_moon.classList.add("aside__menu--dark-button-container__dark-button--moon--active");
        aside_dark_button_sun.classList.add("aside__menu--dark-button-container__dark-button--sun--inactive");
    }else{
        header_dark_button_moon.classList.add("header__nav__dark-button--moon");
        header_dark_button_sun.classList.add("header__nav__dark-button--sun");

        aside_dark_button_moon.classList.add("aside__menu--dark-button-container__dark-button--moon");
        aside_dark_button_sun.classList.add("aside__menu--dark-button-container__dark-button--sun");
    }
}

function CambiarPaginaDarkMode(){
    body.classList.add("body--black");
    logo_light.style.display = "none";
    logo_dark.style.display = "block";
    header_menu.firstElementChild.style.color = "#FFFFFF";
    article_slogan.firstElementChild.style.color = "#FFFFFF";
    article_title.firstElementChild.style.color = "#FFFFFF";
}

function CambiarPaginaLightMode(){
    body.classList.remove("body--black");
    logo_light.style.display = "block";
    logo_dark.style.display = "none";
    header_menu.firstElementChild.style.color = "#000000";
    article_slogan.firstElementChild.style.color = "#223344";
    article_title.firstElementChild.style.color = "#223344";
}
