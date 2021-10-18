var subscriptionModal = document.querySelector('#subscription-modal');
var close = document.querySelector('.close');
var subscriptionBtn = document.querySelector('.suscribe-btn');
subscriptionBtn.onclick = function () {
            subscriptionModal.style.display = "block";
        }
        close.onclick = function () {
            subscriptionModal.style.display = "none";
        }
        function myFunction() {
            var x = document.getElementById("links");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }