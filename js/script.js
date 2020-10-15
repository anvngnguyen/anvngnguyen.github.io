var checkBox = document.querySelector("input[name=theme]");
checkBox.addEventListener("change", function () {
    console.log(document.documentElement.attributes)
    if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
    }
});
let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
};

var navToggle = document.querySelector(".nav-toggle");
var navColumn = document.querySelector(".nav");
var navLinks = document.querySelectorAll(".nav__link");
navToggle.addEventListener("click", () => {
    if (navColumn.getAttribute("style") == "display: inline;") 
        navColumn.removeAttribute("style");
    else
        navColumn.setAttribute("style", "display: inline;");
    document.body.classList.toggle('nav-open');
});
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    });
});