// Inputs
var inputs = document.getElementsByClassName('form-input');
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

// Modal
var infoModal = document.getElementById('subscription-modal');
var nameInfo = document.getElementById('name-info');
var emailInfo = document.getElementById('email-info');
var passInfo = document.getElementById('pass-info');
var ageInfo = document.getElementById('age-info');
var phoneInfo = document.getElementById('phone-info');
var addressInfo = document.getElementById('address-info');
var cityInfo = document.getElementById('city-info');
var pCodeInfo = document.getElementById('pcode-info');
var idInfo = document.getElementById('id-info');
var emptyFields = document.getElementById('empty-fields');

var formErrors = {
    fname: '',
    email: '',
    password: '',
    repeatPassword: '',
    age: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    id: ''
};

// Validation functions

// Full name validation
var clearNameErrors = function () {
    fnameError.classList.add('error-hidden');
};

var validateFullName = function () {
    var fullName = fnameInput.value;
    if (fullName.length < 6) {
        formErrors.fname = 'Your name must have more than 6 characters';
    } else if (fullName.indexOf(' ') <= 0 || fullName.indexOf(' ') == fullName.length -1) {
        formErrors.fname = 'You must provide your full name';
    } else {
        formErrors.fname = '';
    }
    if (formErrors.fname) {
        fnameError.classList.remove('error-hidden');
        fnameError.innerHTML = formErrors.fname;
    } else {
        clearNameErrors();
    }
};

fnameInput.addEventListener('blur', validateFullName);
fnameInput.addEventListener('focus', clearNameErrors);

// Email validation
var clearEmailErrors = function () {
    emailError.classList.add('error-hidden');
};

var validateEmail = function () {
    var email = emailInput.value;
    if (!email.includes('@')) {
        formErrors.email = 'Your email has invalid format';
    } else if (!email.includes('.')) {
        formErrors.email = 'Your email has invalid format';
    } else if (email.includes(' ')) {
        formErrors.email = 'Your email has invalid format';
    } else if (email.indexOf('@') <= 0) {
        formErrors.email = 'Your email has invalid format';
    } else if (email.indexOf('.') == email.length -1) {
        formErrors.email = 'Your email has invalid format';
    } else {
        formErrors.email = '';
    }
    if (formErrors.email) {
        emailError.classList.remove('error-hidden');
        emailError.innerHTML = formErrors.email;
    } else {
        clearEmailErrors();
    }
};

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', clearEmailErrors);

// Password validation
var clearPassErrors = function () {
    passwordError.classList.add('error-hidden');
};

var validatePassword = function () {
    var password = passwordInput.value;
    if(password.length < 8) {
        formErrors.password = 'Your password must have at least 8 characters';
    } else if (password.search(/[a-z]/) < 0) {
        formErrors.password = 'Your password must have at least one letter';
    } else if (password.search(/[0-9]/) < 0) {
        formErrors.password = 'Your password must have at least one number';
    } else {
        formErrors.password = '';
    }
    if (formErrors.password) {
        passwordError.classList.remove('error-hidden');
        passwordError.innerHTML = formErrors.password;
    } else {
        clearPassErrors();
    }
};

passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('focus', clearPassErrors);

// Repeat Password validation
var clearRepeatPassword = function () {
    repeatPassError.classList.add('error-hidden');
};

var validateRepeatPassword = function () {
    var repeatPassword = repeatPasswordInput.value;
    if (repeatPassword !== passwordInput.value) {
        formErrors.repeatPassword = 'Your passwords do not match';
    } else {
        formErrors.repeatPassword = '';
    }
    if (formErrors.password) {
        repeatPassError.classList.remove('error-hidden');
        repeatPassError.innerHTML = formErrors.repeatPassword;
    } else {
        clearRepeatPassword();
    }
};

repeatPasswordInput.addEventListener('blur', validateRepeatPassword);
repeatPasswordInput.addEventListener('focus', clearRepeatPassword);

// Age validation
var clearAgeErrors = function () {
    ageError.classList.add('error-hidden');
};

var validateAge = function () {
    var age = ageInput.value;
    if (age < 18) {
        formErrors.age = 'You must be 18 or older';
    } else if (isNaN(age)) {
        formErrors.age = 'You must use numbers only';
    } else if (age.includes(',')) {
        formErrors.age = 'Your age format is invalid';
    } else if (age.includes('.')) {
        formErrors.age = 'Your age format is invalid';
    } else {
        formErrors.age = '';
    }
    if (formErrors.age) {
        ageError.classList.remove('error-hidden');
        ageError.innerHTML = formErrors.age;
    } else {
        clearAgeErrors();
    }
};

ageInput.addEventListener('blur', validateAge);
ageInput.addEventListener('focus', clearAgeErrors);

// Phone validation
var clearPhoneErrors = function () {
    phoneError.classList.add('error-hidden');
};

var validatePhone = function () {
    var phone = phoneInput.value;
    if (phone.length < 7) {
        formErrors.phone = 'Your phone must have at least 7 digits';
    } else if (isNaN(phone)) {
        formErrors.phone = 'You should use only numbers';
    } else if (phone.includes(',')) {
        formErrors.phone = 'Your phone format is invalid';
    } else if (phone.includes('.')) {
        formErrors.phone = 'Your phone format is invalid';
    } else {
        formErrors.phone = '';
    }
    if (formErrors.phone) {
        phoneError.classList.remove('error-hidden');
        phoneError.innerHTML = formErrors.phone;
    } else {
        clearPhoneErrors();
    }
};

phoneInput.addEventListener('blur', validatePhone);
phoneInput.addEventListener('focus', clearPhoneErrors);

// Address validation
var clearAddressErrors = function () {
    addressError.classList.add('error-hidden');
};

var validateAddress = function () {
    var address = addressInput.value;
    if (address.length < 5) {
        formErrors.address = 'Your address must have at least 5 characters';
    } else if (address.idexOf(' ') <= 0 || address.indexOf(' ') == address.length - 1) {
        formErrors.address = 'Please provide your full address';
    } else if (address.search(/[a-z]/) < 0) {
        formErrors.address = 'Please provide your full address';
    } else if (address.search(/[0-9]/) < 0) {
        formErrors.address = 'Please provide your full address';
    } else {
        formErrors.address = '';
    }
    if (formErrors.address) {
        addressError.classList.remove('error-hidden');
        addressError.innerHTML = formErrors.address;
    } else {
        clearAddressErrors();
    }
};

addressInput.addEventListener('blur', validateAddress);
addressInput.addEventListener('focus', clearAddressErrors);

// City validation
var clearCityErrors = function () {
    cityError.classList.add('error-hidden');
};

var validateCity = function () {
    var city = cityInput.value;
    if (city.length < 3) {
        formErrors.city = 'Your city must have at least 3 characters';
    } else {
        formErrors.city = '';
    }
    if (formErrors.city) {
        cityError.classList.remove('error-hidden');
        cityError.innerHTML = formErrors.city;
    } else {
        clearCityErrors();
    }
};

city.addEventListener('blur', validateCity);
city.addEventListener('focus', clearCityErrors);

// Postal Code validation
var clearPostalCodeErrors = function () {
    pCodeError.classList.add('error-hidden');
};

var validatePostalCode = function () {
    var postalCode = pCodeInput.value;
    if (postalCode.length < 3) {
        formErrors.postalCode = 'Your postal code must have at least 3 characters';
    } else {
        formErrors.postalCode = '';
    }
    if (formErrors.postalCode) {
        pCodeError.classList.remove('error-hidden');
        pCodeError.innerHTML = formErrors.postalCode;
    } else {
        clearPostalCodeErrors();
    }
};

pCodeInput.addEventListener('blur', validatePostalCode);
pCodeInput.addEventListener('focus', clearPostalCodeErrors);

// ID validation
var clearIDErrors = function () {
    idError.classList.add('error-hidden');
};

var validateID = function () {
    var id = idInput.value;
    if (id.length < 7 || id.length > 8 ) {
        formErrors.id = 'Your ID must have between 7 to 8 characters';
    } else {
        formErrors.id = '';
    }
    if (formErrors.id) {
        idError.classList.remove('error-hidden');
        idError.innerHTML = formErrors.id;
    } else {
        clearIDErrors();
    }
};

idInput.addEventListener('blur', validateID);
idInput.addEventListener('focus', clearIDErrors);

// Submit validations
var showInfo = function () {
    nameInfo.innerHTML = !!formErrors.fname ? formErrors.fname : 'Your name is: ' + fnameInput.value;
    nameInfo.style.color = !!formErrors.fname ? 'red' : 'black';
    emailInfo.innerHTML = !!formErrors.email ? formErrors.email : 'Your email is: ' + emailInput.value;
    emailInfo.style.color = !!formErrors.email ? 'red' : 'black';
    passInfo.innerHTML = !!formErrors.password ? formErrors.password : 'Your password is: ' + passwordInput.value;
    passInfo.style.color = !!formErrors.password ? 'red' : 'black';
    ageInfo.innerHTML = !!formErrors.age ? formErrors.age : 'Your age is: ' + ageInput.value;
    ageInfo.style.color = !!formErrors.age ? 'red' : 'black';
    phoneInfo.innerHTML = !!formErrors.phone ? formErrors.phone : 'Your phone is: ' + phoneInput.value;
    phoneInfo.style.color = !!formErrors.phone ? 'red' : 'black';
    addressInfo.innerHTML = !!formErrors.address ? formErrors.address : 'Your address: ' + addressInput.value;
    addressInfo.style.color = !!formErrors.address ? 'red' : 'black';
    cityInfo.innerHTML = !!formErrors.city ? formErrors.city : 'Your city is: ' + cityInput.value;
    cityInfo.style.color = !!formErrors.city ? 'red' : 'black';
    pCodeInfo.innerHTML = !!formErrors.postalCode ? formErrors.postalCode : 'Your postal code is: ' + pCodeInput.value;
    pCodeInfo.style.color = !!formErrors.postalCode ? 'red' : 'black';
    idInfo.innerHTML = !!formErrors.id ? formErrors.id : 'Your id is: ' + idInput.value;
    idInfo.style.color = !!formErrors.id ? 'red' : 'black';
};

var submitBtn = document.querySelector('.suscribe-btn');
submitBtn.addEventListener('click', showInfo);

// Bonus - Dynamic Text
var dynamicTitle = document.querySelector('#welcomeText');

fnameInput.onfocus = function () {
    dynamicTitle.style.opacity = '1';
}

fnameInput.addEventListener('keyup', function () {
    var username = fnameInput.value;
    dynamicTitle.innerHTML = 'Hi' + ' ' + username;
});
