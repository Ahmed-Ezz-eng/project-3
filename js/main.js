// website =>  https://www.thetahmid.com/themes/xemart-v1.0/

let api = "https://mocki.io/v1/b1dbbab0-3ff4-4ce6-9162-5602a5fa5895";

let machineContent = document.querySelector(".machines .row");
let productsContent = document.querySelector(".products .row");
let loading;

// get Data from server
const getData = async(api) => {
    loading = "Loading...";
    try {
        const response = await fetch(api);
        const {machines} = await response.json();
        loading = "";
        drawData(machines)
    } catch(error) {
        console.log("fetch error : ", error.message);
    }
}

function drawData(data) {
    data.map(el => {
        machineContent.innerHTML += `
        <div class="col-12 col-sm-6 col-md-3">
            <div class="machine-content text-center">
                <img class="img-fluid" src = ${el.img} alt = ${el.title} />
                <h3>${el.title}</h3>
                <p>${el.description}</p>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
        `
    })
}


// get newProducts data

const fetchProducts = async(api) => {
    try {
        const response = await fetch(api);
        const {products} = await response.json();
        drawNewProducts(products);
    } catch (error) {
        console.log("fetch error : ", error.message);
    }
}

const drawNewProducts = (products) => {
    products.map(el => {
        productsContent.innerHTML += `
        <div class="col-12 col-sm-6 col-md-3" onmouseenter = "speakCopy(this)">
            <div class="products-content text-center">
                <img class="img-fluid" src = ${el.img} alt = ${el.title} />
                <h3>${el.title}</h3>
                <p>${el.description}</p>
                
                <div class="products-icons d-flex justify-content-between align-items-center">
                <i class="fa fa-volume-up sound"></i>
                <i class="fa fa-clone copy"></i>
                <i class="fa fa-shopping-cart"></i>
                </div>
                </div>
                </div>
                `
            })
        }
        
getData(api);        
fetchProducts(api);


function speakCopy(element) {

    let sound = element.querySelector(".products-content i.sound");
    let copy = element.querySelector(".products-content i.copy");
    let para = element.querySelector("p");
    sound.onclick = function() {
        let utterance = new SpeechSynthesisUtterance(`${para.textContent}`);
        speechSynthesis.speak(utterance);
    }

    copy.onclick = function() {
        navigator.clipboard.writeText(para.innerHTML);
    }
}
