// cards
let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
});


// up
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 700 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
btnUp.addEventListener();


document.getElementById("header").onclick = function () {
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
}


let linksHeader = document.querySelectorAll(".header__heading_menu > li");
for (let i = 0; i < linksHeader.length; i++) {
    linksHeader[i].onclick = function () {
        document.getElementById(linksHeader[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
    }
}

let linksFooter = document.querySelectorAll(".footer__heading_menu > li");
for (let i = 0; i < linksFooter.length; i++) {
    linksFooter[i].onclick = function () {
        document.getElementById(linksFooter[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
    }
}

//burger 
const burgerButton = document.getElementById('svgButton');
const svgReact = document.getElementById('svgReact');
const burgerModal = document.querySelector('.modal');
let isburgerOpen = false;

burgerButton.addEventListener("click", function (e) {
    if (!isburgerOpen) {
        svgReact.setAttribute("x", "0");
        svgReact.setAttribute("width", "23.4873");
        burgerModal.style.top = 0 + "px";
        document.body.style.overflow = "hidden";
    } else {
        svgReact.setAttribute("x", "8.9");
        svgReact.setAttribute("width", "15.2192");
        burgerModal.style.top = -100 + "vh";
        document.body.style.overflow = "auto";
    }
    isburgerOpen = !isburgerOpen;
});