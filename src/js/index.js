const list_icon = document.getElementById("header_list_icon");
const close_icon = document.getElementById("aside__close_icon");
const aside_menu = document.getElementById("aside_menu");

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