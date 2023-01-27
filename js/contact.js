const form = document.querySelector("#contact_form_container");
const yourName = document.querySelector("#name");
const yourNameError = document.querySelector("#nameErr");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailErr");
const title = document.querySelector("#title");
const titleError = document.querySelector("#titleErr");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageErr");


 
function validateForm(event) {
    event.preventDefault();

    if (validateLength(yourName.value, 5) === true) {
        yourNameError.style.display = "none";
    } else {
        yourNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validateLength(title.value, 15) === true){
        titleError.style.display = "none";
    } else {
        titleError.style.display = "block";
    }

    if (validateLength(message.value, 25) === true){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}


function validateLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const validPattern = regEx.test(email);
    return validPattern;
}

form.addEventListener("submit", validateForm);