// Switch between stylesheests on clikc
let togg = false;
function switchStyle() {
    localStorage.setItem("page_stylesheet_name", togg ? './style.css' : './style2.css');
    loadStyle();
    togg = !togg;
}

//default load
function loadStyle() {
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style === null) 
        page_style = "./style.css";

    document.getElementById('theme').setAttribute("href", page_style);
}

loadStyle();