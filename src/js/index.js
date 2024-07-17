const list_icon = document.getElementById("header_list_icon");
const close_icon = document.getElementById("aside__close_icon");
const aside_menu = document.getElementById("aside_menu");

list_icon.addEventListener("click", () => {
    aside_menu.style.display = "block";
});

close_icon.addEventListener("click", () => {
    aside_menu.style.display = "none";
});