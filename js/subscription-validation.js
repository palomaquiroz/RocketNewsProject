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

// Arrays for validating errors in submition
var showInfo = [];
var errorMessages = [];

// Validation functions
// Full name validation
fnameInput.onblur = function () {
    var fullName = fnameInput.value;
    if (fullName.length < 6 || fullName.indexOf(' ') <= 0 || fullName.indexOf(' ') == fullName.length -1) {
        fnameError.classList.remove('error-hidden');
        errorMessages.push('Your name is incorrect, please check' + '\n');
    }
    else {
        showInfo.push('Your name is ' + fullName + '\n');
    }
}

fnameInput.onfocus = function () {
    fnameError.classList.add('error-hidden');
}

// Email validation
emailInput.onblur = function () {
    var email = emailInput.value;
    if (!email.includes('@')) {
        emailError.classList.remove('error-hidden');
        errorMessages.push('Your email is incorrect, please check' + '\n');
    }
    else if(!email.includes('.')) {
        emailError.classList.remove('error-hidden');
        errorMessages.push('Your email is incorrect, please check' + '\n');
    }
    else if(email.includes(' ')) {
        emailError.classList.remove('error-hidden');
        errorMessages.push('Your email is incorrect, please check' + '\n');
    }
    else if(email.indexOf('@') <= 0) {
        emailError.classList.remove('error-hidden');
        errorMessages.push('Your email is incorrect, please check' + '\n');
    }
    else if(email.indexOf('.') == email.length -1) {
        emailError.classList.remove('error-hidden');
        errorMessages.push('Your email is incorrect, please check' + '\n');
    }
    else {
        showInfo.push('Your email is ' + email + '\n');
    }
}

emailInput.onfocus = function () {
    emailError.classList.add('error-hidden');
}

// Password validation
passwordInput.onblur = function () {
    var password = passwordInput.value;
    if(password.length < 8) {
        passwordError.classList.remove('error-hidden');
        errorMessages.push('Your password is incorrect, please check' + '\n');
    }
    else if (password.search(/[a-z]/) < 0) {
        passwordError.classList.remove('error-hidden');
        errorMessages.push('Your password is incorrect, please check' + '\n');
    }
    else if (password.search(/[0-9]/) < 0) {
        passwordError.classList.remove('error-hidden');
        errorMessages.push('Your password is incorrect, please check' + '\n');
    }
    else {
        showInfo.push('Your password is ' + password + '\n');
    }
}

passwordInput.onfocus = function () {
    passwordError.classList.add('error-hidden');
}

// Repeat password validation
repeatPasswordInput.onblur = function () {
    var repeatPassword = repeatPasswordInput.value;
    if(repeatPassword !== passwordInput.value) {
        repeatPassError.classList.remove('error-hidden');
        errorMessages.push("Your passwords don't match, please check" + '\n');
    }
}

repeatPasswordInput.onfocus = function () {
    repeatPassError.classList.add('error-hidden');
}

// Age validation
ageInput.onblur = function () {
    var age = ageInput.value;
    if (age < 18) {
        ageError.classList.remove('error-hidden');
        errorMessages.push('Your age is incorrect, please check' + '\n');
    }
    else if (isNaN(age)) {
        ageError.classList.remove('error-hidden');
        fields['age'] = "";
        errorMessages.push('Your age is incorrect, please check' + '\n');
    }
    else if(age.includes(',')) {
        ageError.classList.remove('error-hidden');
        fields['age'] = "";
        errorMessages.push('Your age is incorrect, please check' + '\n');
    }
    else if(age.includes('.')) {
        ageError.classList.remove('error-hidden');
        errorMessages.push('Your age is incorrect, please check' + '\n');
    }
    else {
        showInfo.push('Your age is ' + age + '\n');
    }
}

ageInput.onfocus = function () {
    ageError.classList.add('error-hidden');
}

// Phone validation
phoneInput.onblur = function () {
    var phone = phoneInput.value;
    if (phone.length < 7) {
        phoneError.classList.remove('error-hidden');
        errorMessages.push('Your phone is incorrect, please check' + '\n');
    }
    else if (isNaN(phone)) {
        phoneError.classList.remove('error-hidden');
        errorMessages.push('Your phone is incorrect, please check' + '\n');
    }
    else if(phone.includes(',')) {
        phoneError.classList.remove('error-hidden');
        errorMessages.push('Your phone is incorrect, please check' + '\n');
    }
    else if (phone.includes('.')) {
        phoneError.classList.remove('error-hidden');
        errorMessages.push('Your phone is incorrect, please check' + '\n');
    }
    else {
        showInfo.push('Your phone is ' + phone + '\n');
    }
}

phoneInput.onfocus = function () {
    phoneError.classList.add('error-hidden');
}

// Address validation
addressInput.onblur = function () {
    var address = addressInput.value;
    if (address.length < 5) {
        addressError.classList.remove('error-hidden');
        errorMessages.push('Your address is incorrect, please check' + '\n');
    }
    else if (address.idexOf(' ') <= 0 || address.indexOf(' ') == address.length - 1) {
        addressError.classList.remove('error-hidden');
        errorMessages.push('Your address is incorrect, please check' + '\n');
    }
    else if (address.search(/[a-z]/) < 0) {
        passwordError.classList.remove('error-hidden');
        errorMessages.push('Your address is incorrect, please check' + '\n');
    }
    else if (address.search(/[0-9]/) < 0) {
        passwordError.classList.remove('error-hidden');
        errorMessages.push('Your address is incorrect, please check' + '\n');
    }
    else {
        showInfo.push('Your address is ' + address + '\n');
    }
}

addressInput.onfocus = function () {
    addressError.classList.add('error-hidden');
}

// City validation
cityInput.onblur = function () {
    var city = cityInput.value;
    if (city.length < 3) {
        cityError.classList.remove('error-hidden');
        errorMessages.push('Your city is incorrect, please check' + '\n');
    }
    else {
        showInfo.push('Your city is ' + city + '\n');
    }
}

cityInput.onfocus = function () {
    cityError.classList.add('error-hidden');
}

// Postal code validation
pCodeInput.onblur = function () {
    var postalCode = pCodeInput.value;
    if (postalCode.length < 3) {
        pCodeError.classList.remove('error-hidden');
        errorMessages.push('Your postal code is incorrect, please check' + '\n');
    }
    else {
        showInfo.push('Your postal code is ' + postalCode + '\n');
    }
}

pCodeInput.onfocus = function () {
    pCodeError.classList.add('error-hidden');
}

// ID validation
idInput.onblur = function () {
    var id = idInput.value;
    if (id.length < 7 || id.length > 8 ) {
        idError.classList.remove('error-hidden');
        errorMessages.push('Your id is incorrect, please check' + '\n');
    }
    else {
        showInfo.push('Your id is ' + id + '\n');
    }
}

idInput.onfocus = function () {
    idError.classList.add('error-hidden');
}

// Submit validations
var submitBtn = document.getElementById('suscribe-btn');

submitBtn.onclick = function () {
    if(errorMessages.length == 0) {
        alert(showInfo.join(' '));
    }
    else {
        var info = showInfo.concat(errorMessages);
        alert(info.join(' '));
    }
    location.reload();
}

// Bonus - Dynamic Text
var dynamicTitle = document.querySelector('#welcomeText');

fnameInput.onfocus = function () {
    dynamicTitle.style.opacity = '1';
}

fnameInput.addEventListener('keyup', function () {
    var username = fnameInput.value;
    dynamicTitle.innerHTML = 'Hi' + ' ' + username;
});
