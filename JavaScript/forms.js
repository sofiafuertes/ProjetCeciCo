const form = document.querySelector("form");
console.log(form);
const nameForm = document.querySelector("#name");
console.log(nameForm);
const mailForm = document.querySelector("#mail");
console.log(mailForm);
const messageForm = document.querySelector("#message");
console.log(messageForm);

const errorMessageName = document.createElement("div");
nameForm.after(errorMessageName);
errorMessageName.innerHTML = ``;
errorMessageName.style.color = "red";

/**
 * Validates the 'nameForm' input on blur event.
 * 
 * This function checks if the input contains only letters and spaces,
 * with a length between 2 and 50 characters. If the input is valid,
 * it clears any error messages. If invalid, it displays an error message.
 *
 * @global {boolean} isFilledName - Tracks whether the 'nameForm' input has been filled.
 * @event blur - Triggered when the input field loses focus.
 * @regex /^[\p{L}\s]{2,50}$/u - Allows any Unicode letter (including accented characters) and spaces.
 */

let isFilledName = false;
nameForm.addEventListener("blur", () => {
    const nameRegex = /^[\p{L}\s]{2,50}$/u;
    if (nameForm.value != ``) {
        isFilledName = true;
    }
    if (isFilledName) {
        if (nameRegex.test(nameForm.value)) {
            errorMessageName.innerHTML = ``;
        } else {
            errorMessageName.innerHTML = `- Name is not correct. Please don't use numbers or special characters (except for accents).`;
        }
    }
});

const errorMessageMail = document.createElement("div");
mailForm.after(errorMessageMail);
errorMessageMail.innerHTML = ``;
errorMessageMail.style.color = "red";

let isFilledMail = false;

mailForm.addEventListener("blur", () => {
    const mailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
    if (mailForm.value != ``) {
        isFilledMail = true;
    }
    if (isFilledMail) {
        if (mailRegex.test(mailForm.value)) {
            errorMessageMail.innerHTML = ``;
        } else {
            errorMessageMail.innerHTML = `- Mail format is invalid. Please verify and try again.`;
        }
    }
});

const errorMessageText = document.createElement("div");
messageForm.after(errorMessageText);
errorMessageText.innerHTML = ``;
errorMessageText.style.color = `red`;

let isFilledMessage = false;

messageForm.addEventListener("blur", () => {
    const messageRegex = /^[a-zA-Z0-9\s.,!?'\-()]{20,600}$/;
    if (messageForm.value != ``) {
        isFilledMessage = true;
    }
    if (isFilledMessage) {
        if (messageRegex.test(messageForm.value)) {
            errorMessageText.innerHTML = ``;
        } else {
            errorMessageText.innerHTML = `- Your message must be between 20 and 600 characters long. Please use only letters, numbers, spaces, and the following punctuation: . , ! ? ' - ( )`;
        }
    }
});
