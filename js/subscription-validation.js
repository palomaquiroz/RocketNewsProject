// Inputs
var fnameInput = document.getElementById('full-name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var repeatPasswordInput = document.getElementById('repeat-password');
var ageInput = document.getElementById('age');
var phoneInput = document.getElementById('phone');
var addressInput = document.getElementById('address');
var cityInput = document.getElementById('city');
var pCodeInput = document.getElementById('postal-code');
var idInput = document.getElementById('id');

// Error messages
var fnameError = document.getElementById('error-fname');
var emailError = document.getElementById('error-email');
var passwordError = document.getElementById('error-password');
var repeatPassError = document.getElementById('error-repeat-password');
var ageError = document.getElementById('error-age');
var phoneError = document.getElementById('error-phone');
var addressError = document.getElementById('error-address');
var cityError = document.getElementById('error-city');
var pCodeError = document.getElementById('error-pcode');
var idError = document.getElementById('error-id');

// Validation functions
fnameInput.onblur = function () {
    var fullName = fnameInput.value;
    if (fullName.length < 6 || fullName.indexOf(' ') <= 0 || fullName.indexOf(' ') == fullName.length -1) {
        fnameError.classList.remove('error-hidden');
    }
}

fnameInput.onfocus = function () {
    fnameError.classList.add('error-hidden');
}

emailInput.onblur = function () {
    var email = emailInput.value;
    if (!email.includes('@')) {
        emailError.classList.remove('error-hidden');
    }
    else if(!email.includes('.')) {
        emailError.classList.remove('error-hidden');
    }
    else if(email.includes(' ')) {
        emailError.classList.remove('error-hidden');
    }
    else if(email.indexOf('@') <= 0) {
        emailError.classList.remove('error-hidden');
    }
    else if(email.indexOf('.') == email.length -1) {
        emailError.classList.remove('error-hidden');
    }
}

emailInput.onfocus = function () {
    emailError.classList.add('error-hidden');
}

passwordInput.onblur = function () {
    var password = passwordInput.value;
    if(password.length < 8) {
        passwordError.classList.remove('error-hidden');
    }
    else if (password.search(/[a-z]/) < 0) {
        passwordError.classList.remove('error-hidden');
    }
    else if (password.search(/[0-9]/) < 0) {
        passwordError.classList.remove('error-hidden');
    }
}

passwordInput.onfocus = function () {
    passwordError.classList.add('error-hidden');
}

repeatPasswordInput.onblur = function () {
    var repeatPassword = repeatPasswordInput.value;
    if(repeatPassword !== passwordInput.value) {
        repeatPassError.classList.remove('error-hidden');
    }
}

repeatPasswordInput.onfocus = function () {
    repeatPassError.classList.add('error-hidden');
}

ageInput.onblur = function () {
    var age = ageInput.value;
    if (age < 18) {
        ageError.classList.remove('error-hidden');
    }
    else if (isNaN(age)) {
        ageError.classList.remove('error-hidden');
    }
    else if(age.includes(',')) {
        ageError.classList.remove('error-hidden');
    }
    else if(age.includes('.')) {
        ageError.classList.remove('error-hidden');
    }
}

ageInput.onfocus = function () {
    ageError.classList.add('error-hidden');
}

phoneInput.onblur = function () {
    var phone = phoneInput.value;
    if (phone.length < 7) {
        phoneError.classList.remove('error-hidden');
    }
    else if (isNaN(phone)) {
        phoneError.classList.remove('error-hidden');
    }
    else if(phone.includes(',')) {
        phoneError.classList.remove('error-hidden');
    }
    else if (phone.includes('.')) {
        phoneError.classList.remove('error-hidden');
    }
}

phoneInput.onfocus = function () {
    phoneError.classList.add('error-hidden');
}

addressInput.onblur = function () {
    var address = addressInput.value;
    if (address.length < 5) {
        addressError.classList.remove('error-hidden');
    }
    else if (address.idexOf(' ') <= 0 || address.indexOf(' ') == address.length - 1) {
        addressError.classList.remove('error-hidden');
    }
    else if (address.search(/[a-z]/) < 0) {
        passwordError.classList.remove('error-hidden');
    }
    else if (address.search(/[0-9]/) < 0) {
        passwordError.classList.remove('error-hidden');
    }
}

addressInput.onfocus = function () {
    addressError.classList.add('error-hidden');
}

cityInput.onblur = function () {
    var city = cityInput.value;
    if (city.length < 3) {
        cityError.classList.remove('error-hidden');
    }
}

cityInput.onfocus = function () {
    cityError.classList.add('error-hidden');
}

pCodeInput.onblur = function () {
    var postalCode = pCodeInput.value;
    if (postalCode.length < 3) {
        pCodeError.classList.remove('error-hidden');
    }
}

pCodeInput.onfocus = function () {
    pCodeError.classList.add('error-hidden');
}

idInput.onblur = function () {
    var id = idInput.value;
    if (id.length < 7 || id.length > 8 ) {
        idError.classList.remove('error-hidden');
    }
}

idInput.onfocus = function () {
    idError.classList.add('error-hidden');
}
