// Open/close navigation menu on mobile

let nav = document.querySelector(".navigation");
let navButton = document.querySelector(".navigation__toggle");

nav.classList.remove("navigation--nojs");

navButton.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (nav.classList.contains("navigation--closed")) {
        nav.classList.remove("navigation--closed");
        nav.classList.add("navigation--opened");
    } else {
        nav.classList.add("navigation--closed");
        nav.classList.remove("navigation--opened");
    }
});

// Open/close popup on index and catalog pages

let popup = document.querySelector(".subscribe-popup");
let popupOverlay = document.querySelector(".overlay");
let openButton = document.querySelectorAll(".js-popup-button");
let closeButton = document.querySelector(".subscribe-popup__button");


for (let i = 0; i < openButton.length; i++){
    openButton[i].addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.remove("subscribe-popup--hidden");
        popupOverlay.classList.remove("overlay--hidden");
    });
}

closeButton.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("subscribe-popup--hidden");
    popupOverlay.classList.add("overlay--hidden");
});

popupOverlay.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("subscribe-popup--hidden");
    popupOverlay.classList.add("overlay--hidden");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (!popup.classList.contains("subscribe-popup--hidden")) {
            popup.classList.add("subscribe-popup--hidden");
            popupOverlay.classList.add("overlay--hidden");
        }
    }
});
