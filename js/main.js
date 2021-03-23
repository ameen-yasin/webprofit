// the following two fucntion will open and colse
// nav bar in spacific screen sizes
function openNav() {
    document.getElementById("overlay").style.height = "100%";
}

function closeNav() {
    document.getElementById("overlay").style.height = "0%";
}

// This fuction will retrn refrance of the html element
function refranceElement(elemnetId) {
    return document.getElementById(elemnetId);
}

const form = refranceElement("form");
// Retrieving the values of form elements
const firstName = refranceElement("first-name");
const lastName = refranceElement("last-name");
const email = refranceElement("email");
const phoneNumber = refranceElement("phone-number");
const companyName = refranceElement("company-name-input");
const companyWebsite = refranceElement("company-website");
const jobTitle = refranceElement("job-title");
const companySize = refranceElement("company-size-input");

// Each time the user types something, we check if the
// form fields are valid.
form.addEventListener('input', function (event) {
    const item = event.target;
    validation(item);
});

form.addEventListener('focusout', function (event) {
    const item = event.target;
    validation(item);
});

const fields = [
    firstName,
    lastName,
    email,
    phoneNumber,
    companyName,
    companyWebsite,
    jobTitle,
    companySize
];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fields.forEach(function (item) {
        validation(item);
    });
});

function validation(refranceElement, className) {
    // get the pattern attribute from html element
    let reg = new RegExp(refranceElement.getAttribute('pattern'));
    const re = reg.test(refranceElement.value);
    if (Object.is(re, true)) {
        refranceElement.classList.remove(className);
    } else {
        refranceElement.classList.add(className);
    }
}

function validation(item) {
    if (item.name === "company-size-input") {
        validation(item, "company-size-error");
    } else {
        validation(item, "error");
    }

}