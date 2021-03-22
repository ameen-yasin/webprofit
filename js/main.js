// the following two fucntion will open and colse 
// nav bar in spacific screen sizes
function openNav() {
    document.getElementById("overlay").style.height = "100%";
}

function closeNav() {
    document.getElementById("overlay").style.height = "0%";
}


// Form Validation
let isFormValid = true;
// This fuction will retrn refrance of the html element
function refranceElement(elemnetId) {
    return document.getElementById(elemnetId);
}

// Retrieving the values of form elements
const firstName = refranceElement("first-name");
const lastName = refranceElement("last-name");
const email = refranceElement("email");
const phoneNumber = refranceElement("phone-number");
const companyName = refranceElement("company-name-input");
const companyWebsite = refranceElement("company-website");
const jobTitle = refranceElement("job-title");
const companySize = refranceElement("company-size-input");

function validation(refranceElement, eventListener, className) {
    refranceElement.addEventListener(eventListener, () => {
        // if the value of the element is empty
        if (refranceElement.value === "") {
            // we add error class to the element if the user didnt enter anything
            refranceElement.classList.add(className);
        } else if (refranceElement.validity.patternMismatch) {
            // if the user enter invalid pattern 
            refranceElement.classList.add(className);
        } else {
            // if the field is valid, we remove the error message.
            refranceElement.classList.remove(className);
        }
    });
}

function validationOnSubmit(refranceElement, className) {
    // if the value of the element is empty
    if (refranceElement.value === "") {
        // we add error class to the element
        refranceElement.classList.add(className);
        isFormValid = false;
    } else if (refranceElement.validity.patternMismatch) {
        // if the user enter invalid pattern 
        refranceElement.classList.add(className);
        isFormValid = false
    } else {
        // if the field is valid, we remove the error message.
        refranceElement.classList.remove(className);
        isFormValid = true;
    }
}


// Each time the user types something, we check if the
// form fields are valid.
validation(firstName, 'input', 'error');
validation(firstName, 'focusout', 'error');

validation(lastName, 'input', 'error');
validation(lastName, 'focusout', 'error');

validation(email, 'input', 'error');
validation(email, 'focusout', 'error');

validation(phoneNumber, 'input', 'error');
validation(phoneNumber, 'focusout', 'error');

validation(companyName, 'input', 'error');
validation(companyName, 'focusout', 'error');

validation(companyWebsite, 'input', 'error');
validation(companyWebsite, 'focusout', 'error');


validation(jobTitle, 'input', 'error');
validation(jobTitle, 'focusout', 'error');

validation(companySize, 'input', 'company-size-error');
validation(companySize, 'focusout', 'company-size-error');



function validateForm(e) {
    e.preventDefault();
    validationOnSubmit(firstName, 'error');
    validationOnSubmit(lastName, 'error');
    validationOnSubmit(email, 'error');
    validationOnSubmit(phoneNumber, 'error');
    validationOnSubmit(companyName, 'error');
    validationOnSubmit(companyWebsite, 'error');
    validationOnSubmit(jobTitle, 'error');
    validationOnSubmit(companySize, 'company-size-error');
    return isFormValid;
}


// email.addEventListener('blur', () => {
//     let regex =
//         /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
//     let s = email.value;
//     if (regex.test(s)) {
//         email.classList.remove(
//             'is-invalid');
//         emailError = true;
//     }
//     else {
//         email.classList.add(
//             'is-invalid');
//         emailError = false;
//     }
// })

//     // Set the styling appropriately
//     emailError.className = 'error active';
// }
