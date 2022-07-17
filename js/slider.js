
//  header part

let barsBtn = document.querySelector(".fa.fa-bars");
let vavList = document.querySelector("nav > ul");

barsBtn.addEventListener("click", () => {
    vavList.classList.toggle("active")
})

//   slider part

let homeContent = document.querySelector(".home-content"),
    nextBtn = document.getElementById("home-next"),
    prevBtn = document.getElementById("home-prev"),
    child = document.querySelector(".home-content > div:last-child");

nextBtn.addEventListener("click", moveRight);
prevBtn.addEventListener("click", moveleft); 

function moveRight () {
    homeContent.scrollBy(homeContent.scrollWidth / 4, 0);
    if (homeContent.scrollLeft >= 648) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = .4
    } else {
        prevBtn.style.opacity = 1;
        prevBtn.disabled = false
    }
}

function moveleft () {
    homeContent.scrollBy(-homeContent.scrollWidth / 4, 0);
    if (homeContent.scrollLeft <= 0) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = .4
    } else {
        nextBtn.style.opacity = 1;
        nextBtn.disabled = false
    }
}

let loadingScreen = document.querySelector(".loading")
window.onload = function() {
    prevBtn.disabled = true;
    prevBtn.style.opacity = .4;
    loadingScreen.classList.add("fadeout");
}

