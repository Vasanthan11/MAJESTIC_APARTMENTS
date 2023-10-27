// preload data while we load
const preloader = document.querySelector('[data_preload]');

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})


// <-------------------------------------------------------------------------------------------->
// navbar Mobile
const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar_link");

navToggler.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (navLink) {
            navLink.classList.remove("active");
        });
        link.classList.add("active");
        navbar.classList.remove("active");
    });
});

// scroll bar view of nav bar
const header = document.querySelector('[data_header]');
const backToBtn = document.querySelector("[data_back_top_btn]");
let lastScrollpos = 0;

const hideHeader = function () {
}

window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 100) {
        header.classList.add('active');
        backToBtn.classList.add('active');
        hideHeader();
    }
    else {
        header.classList.remove('active');
        backToBtn.classList.remove('active');
    }
})


// <-------------------------------------------------------------------------------------------->
// hero slider content
const heroSlider = document.querySelector("[data_hero_slider]");
const heroSliderItems = document.querySelectorAll("[data_hero_slider_item]");
const heroSliderPrevBtn = document.querySelector("[data_prev_btn]");
const heroSliderNextBtn = document.querySelector("[data_next_btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
    if (currentSlidePos >= heroSliderItems.length - 1) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
    } else {
        currentSlidePos--;
    }

    updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
    autoSlideInterval = setInterval(function () {
        slideNext();
    }, 7000);
}

// if mouse enter in prev or next button slide stops and works if mouse leaves
const elements = [heroSliderNextBtn, heroSliderPrevBtn];

elements.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        clearInterval(autoSlideInterval);
    });

    element.addEventListener("mouseout", function () {
        autoSlide();
    });
});

window.addEventListener("load", autoSlide);


// <-------------------------------------------------------------------------------------------->
