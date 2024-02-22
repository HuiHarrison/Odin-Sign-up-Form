const submitBtn = document.querySelector('button[type="submit"]');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm_password');
const passwordDiv = document.querySelector('#password-div');

function checkMatchingPassword() {
    return password.value === confirm_password.value
}

submitBtn.addEventListener('click', (event) => {
    if (!checkMatchingPassword()) {
        event.preventDefault();
        passwordDiv.classList.add('password-error');
        password.style.border = "1px solid red";
        confirm_password.style.border = "1px solid red";
    }
    else {
        passwordDiv.classList.remove('password-error');
        password.style.border = "";
        confirm_password.style.border = "";
    }
})