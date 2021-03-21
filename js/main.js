// the following two fucntion will open and colse 
// nav bar in spacific screen sizes
function openNav() {
    document.getElementById("overlay").style.height = "100%";
}

function closeNav() {
    document.getElementById("overlay").style.height = "0%";
}


// Form Validation
// This fuction will retrn refrance of the html element
function refranceElement(elemnetId) {
    return document.getElementById(elemnetId);
}

function inputRefracne(inputName) {
    return document.forms["contact-form"][inputName];
}

// Retrieving the values of form elements
const firstName = inputRefracne("first-name");
const lastName = inputRefracne("last-name");
const email = inputRefracne("email");
const phoneNumber = inputRefracne("phone-number");
const companyName = inputRefracne("company-name");
const companyWebsite = inputRefracne("company-website");
const jobTitle = inputRefracne("job-title");
const companySize = inputRefracne("company-size");

const firstNameValue = firstName.value;
const lastNameValue = lastName.value;
const emailValue = email.value;
const phoneNumberValue = phoneNumber.value;
const companyNameValue = companyName.value;
const companyWebsiteValue = companyWebsite.value;
const jobTitleValue = jobTitle.value;
const companySizeValue = companySize.value;


function validation(refranceElement, eventListener, className) {
    refranceElement.addEventListener(eventListener, () => {
        // if the value of the element is empty
        if (refranceElement.value === "") {
            // we add error class to the element
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

function validation(refranceElement, className) {
    validation(refranceElement, "onSubmit", className)
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
    e.preventDefault()

    validation(firstName, 'error');
    validation(firstName, 'error');

    validation(lastName, 'error');
    validation(lastName, 'error');

    validation(email, 'error');
    validation(email, 'error');

    validation(phoneNumber, 'error');
    validation(phoneNumber, 'error');

    validation(companyName, 'error');
    validation(companyName, 'error');


    validation(companyWebsite, 'error');
    validation(companyWebsite, 'error');


    validation(jobTitle, 'error');
    validation(jobTitle, 'error');

    validation(companySize, 'company-size-error');
    validation(companySize, 'company-size-error');

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
