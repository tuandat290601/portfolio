// controller

const openBtn = document.getElementById("btn-open")
const closeBtn = document.getElementById("btn-close")
const Navbar = document.getElementById("navbar")
const Blur = document.getElementById("blur")
const topPage = document.getElementById("portfolio")


const scrollBtn = document.getElementById("btn-scroll")

const background1 = document.querySelector(".portfolio-bg-1");
const background2 = document.querySelector(".portfolio-bg-2");


function handleController() {
    openBtn.addEventListener("click", function(e) {
        e.preventDefault();
        openBtn.classList.remove("show")
        closeBtn.classList.add("show")
        Blur.classList.add("show")
        Navbar.classList.add("show-nav")
        Navbar.classList.remove("hide")
        if (Navbar.classList.contains("hide-nav")) {
            Navbar.classList.remove("hide-nav")
        }
    })

    closeBtn.addEventListener("click", function(e) {
        e.preventDefault();
        openBtn.classList.add("show")
        closeBtn.classList.remove("show")
        Blur.classList.remove("show")
        Navbar.classList.remove("show-nav")
        Navbar.classList.add("hide-nav")
        setTimeout(() => {
            Navbar.classList.add("hide")
        }, 900)
    })
}

handleController();

window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    let position = window.pageYOffset;
    if (position > 400 || position > 400) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
    if (position < 800 || position < 800) {
        background1.style.display = "block"
        background2.style.display = "none"
    } else {
        background1.style.display = "none"
        background2.style.display = "block"
    }
}

function topFunction(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}