// the following two fucntion will open and colse 
// nav bar in spacific screen sizes
function openNav() {
    document.getElementById("overlay").style.height = "100%";
}

function closeNav() {
    document.getElementById("overlay").style.height = "0%";
}


// this section will display comapny names in homepage changed based on time events
// array of company names
const companyNamesArray = ["Canon's", "Nimble's", "Bellamy's", "Logitech's", "LJ Hooker's"];
let index = 0;
let opacity = 100;
const spanElement = document.getElementById('company-name');
hideFade(opacity);

// show Function will change company name based on time every 2s
function show() {
    spanElement.innerHTML = companyNamesArray[index];
    showFade(0);
    index++;
    if (index >= companyNamesArray.length) {
        index = 0;
    }
}
setTimeout(2000);

setInterval(show, 1000);

// showFade fuction will change the opacity value of span element based on time 
// untill the opacity value become zero
// @opacityValue : input
function hideFade(opacityValue) {
    if (opacityValue >= 0) {
        spanElement.style.opacity = (opacityValue / 100);
        setTimeout("hideFade(" + (opacityValue - 50) + ")", 500);
        // hideFade(opacityValue - 0.2);
    }
}
// showFade fuction will change the opacity value of span element based on time 
// untill the opacity value become one
// @opacityValue : input
function showFade(opacityValue) {
    if (opacityValue <= 100) {
        spanElement.style.opacity = (opacityValue / 100);
        setTimeout("showFade(" + (opacityValue + 50) + ")", 500);
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// this fuction will display spacific slide content to the user
// n: numer of which slide which we want to display to the user
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Form Validation
const email = refranceElement("email");

// // This fuction will retrn refrance of the html element
function refranceElement(elemnetId) {
    return document.getElementById(elemnetId);
}

// console.log(email);


email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an e-mail address!");
    } else {
        email.setCustomValidity("");
    }
});
