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
    console.log(navColumn.style.display);
    if (document.body.classList.toggle('nav-open') == false) {
        console.log("Set hidden");
        navColumn.setAttribute("style", "display: hidden;");
    } 
    else
        navColumn.setAttribute("style", "display: inline;");
    ;
});
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    });
});

var goTop = document.querySelector(".go-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > (window.innerHeight / 2)) {
        goTop.setAttribute("style", "visibility: visible");
    } else {
        goTop.setAttribute("style", "visibility: hidden");
    }
});

var introImg = document.querySelector(".intro__img");
introImg.setAttribute("title", "obviously not a picture of me");