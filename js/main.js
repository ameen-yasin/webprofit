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
        } else {
            // if the field is valid, we remove the error message.
            refranceElement.classList.remove(className);
        }
    });
}

// Validate telephone numbers
function validateNumber(eventListener) {
    phoneNumber.addEventListener(eventListener, () => {

        // var regex = /^[0-9]\d{6}$/;
        // if (regex.test(phoneNumberValue) == false) {
        //     alert("enterd");
        //     phoneNumber.classList.add('error');
        // }
        // // if the value of the element is empty

        if (phoneNumberValue === "") {
            // we add error class to the element
            phoneNumber.classList.add('error');
        } else {
            // in case the phone number less than 6 digit we add
            // error clas to phone element
            var regex = /[0-9]{6}/;
            if (regex.test(phoneNumberValue) == false) {
                phoneNumber.classList.add('error');
            } else {
                // if the field is valid, we remove the error message.
                refranceElement.classList.remove(className);
            }
        }
    });
}

// Each time the user types something, we check if the
// form fields are valid.
validation(firstName, 'input', 'error');
validation(firstName, 'focusout', 'error');

validation(lastName, 'input', 'error');
validation(lastName, 'focusout', 'error');

validation(email, 'input', 'error');
validation(email, 'focusout', 'error');

validateNumber('input');
validateNumber('focusout');

validation(companyName, 'input', 'error');
validation(companyName, 'focusout', 'error');

validation(companyWebsite, 'input', 'error');
validation(companyWebsite, 'focusout', 'error');


validation(jobTitle, 'input', 'error');
validation(jobTitle, 'focusout', 'error');

validation(companySize, 'input', 'company-size-error');
validation(companySize, 'focusout', 'company-size-error');




function validateForm() {
    let boolean = true;
    if (firstNameValue == "") {
        firstName.classList.add('error');
        boolean = false;
    }
    if (lastNameValue === "") {
        lastName.classList.add('error');
        boolean = false;
    }
    // if (emailValue == "") {
    //     email.classList.add('error');
    //     boolean = false;
    // } else {
    //     // Regular expression for basic email validation
    //     var regex = /^\S+@\S+\.\S+$/;
    //     if (regex.test(emailValue) == false) {
    //         email.classList.add('error');
    //         boolean = false;
    //     }
    // }

    // Validate telephone numbers
    if (phoneNumberValue == "") {
        phoneNumber.classList.add('error');
        boolean = false;
    } else {
        var regex = /^[0-9]\d{6}$/;
        if (regex.test(phoneNumberValue) == false) {
            phoneNumber.classList.add('error');
            boolean = false;
        }
    }
    if (companyNameValue == "") {
        companyName.classList.add('error');
        boolean = false;
    }
    if (companyWebsiteValue == "") {
        companyWebsite.classList.add('error');
        boolean = false;
    }
    if (jobTitleValue == "") {
        jobTitle.classList.add('error');
        boolean = false;
    }
    if (companySizeValue == "") {
        companySize.classList.add('company-size');
        boolean = false;
    }

    return boolean;
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
