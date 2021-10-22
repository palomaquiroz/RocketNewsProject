var subscriptionModal = document.querySelector('#subscription-modal');
var close = document.querySelector('.close');
var subscriptionBtn = document.querySelector('.suscribe-btn');
subscriptionBtn.onclick = function () {
            subscriptionModal.style.display = "block";
        }
        close.onclick = function () {
            subscriptionModal.style.display = "none";
        }