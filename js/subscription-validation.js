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
    name: '',
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
        formErrors.name = 'Your name must have more than 6 characters';
    } else if (fullName.indexOf(' ') <= 0 || fullName.indexOf(' ') == fullName.length -1) {
        formErrors.name = 'You must provide your full name';
    } else {
        formErrors.name = '';
    }
    if (formErrors.name) {
        fnameError.classList.remove('error-hidden');
        fnameError.innerHTML = formErrors.name;
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
    } else if (address.indexOf(' ') <= 0 || address.indexOf(' ') == address.length - 1) {
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

// Submit validations & localStorage of user data
var userDataStorage = function () {
    localStorage.setItem('name', fnameInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passwordInput.value);
    localStorage.setItem('repeat password', repeatPasswordInput.value);
    localStorage.setItem('age', ageInput.value);
    localStorage.setItem('phone', phoneInput.value);
    localStorage.setItem('address', addressInput.value);
    localStorage.setItem('city', cityInput.value);
    localStorage.setItem('postal code', pCodeInput.value);
    localStorage.setItem('ID', idInput.value);
}

var modalMessage = function () {
    var API_URL = 'http://curso-dev-2021.herokuapp.com/newsletter?';
    var queryParams = `name=${fnameInput.value}&email=${emailInput.value}&password=${passwordInput.value}&age=${ageInput.value}&phone=${phoneInput.value}&address=${addressInput.value}&city=${cityInput.value}&postalCode=${pCodeInput.value}&id=${idInput.value}`;
    if(formErrors.name == '' && formErrors.email == '' && formErrors.password == ''
    && formErrors.age == '' && formErrors.phone == '' && formErrors.address == ''
    && formErrors.city == '' && formErrors.postalCode == '' && formErrors.id == '') {
        fetch(`${API_URL}${queryParams}`)
        .then(response => response.json())
        .then(data => {
            var output = '';
            for (var property in data) {
            output += property + ': ' + data[property]+ '<br>';
            }
            responseMessage.innerHTML = 'Your subscription was successful! Here is your data:';
            responseMessage.style.color = 'green';
            responseDetails.innerHTML = output;
            userDataStorage();
        })
        .catch((error) => {
            responseMessage.innerHTML = 'There was an error in your subscription: '
            responseMessage.style.color = 'red';
            responseDetails.innerHTML = error;
        })
    } else {
        var output = '';
            for (var property in formErrors) {
            output += property + ': ' + formErrors[property]+ '<br>';
            }
        responseMessage.innerHTML = 'You should complete all of your fields';
        responseMessage.style.color = 'red';
        responseDetails.innerHTML = output;
    }
}

var submitBtn = document.querySelector('.suscribe-btn');
submitBtn.addEventListener('click', modalMessage);

// Onload localStorage verification
var checkLocalStorage = function () {
    fnameInput.value = !!localStorage.getItem('name') ? localStorage.getItem('name') : null;
    emailInput.value = !!localStorage.getItem('email') ? localStorage.getItem('email') : null;
    passwordInput.value = !!localStorage.getItem('password') ? localStorage.getItem('password') : null;
    repeatPasswordInput.value = !!localStorage.getItem('repeat password') ? localStorage.getItem('repeat password') : null;
    ageInput.value = !!localStorage.getItem('age') ? localStorage.getItem('age') : null;
    phoneInput.value = !!localStorage.getItem('phone') ? localStorage.getItem('phone') : null;
    addressInput.value = !!localStorage.getItem('address') ? localStorage.getItem('address') : null;
    cityInput.value = !!localStorage.getItem('city') ? localStorage.getItem('city') : null;
    pCodeInput.value = !!localStorage.getItem('postal code') ? localStorage.getItem('postal code') : null;
    idInput.value = !!localStorage.getItem('ID') ? localStorage.getItem('ID') : null;
}

window.onload = checkLocalStorage;

//Dynamic Text
var dynamicTitle = document.querySelector('#welcomeText');

fnameInput.onfocus = function () {
    dynamicTitle.style.opacity = '1';
}

fnameInput.addEventListener('keyup', function () {
    var username = fnameInput.value;
    dynamicTitle.innerHTML = 'Hi' + ' ' + username;
});
