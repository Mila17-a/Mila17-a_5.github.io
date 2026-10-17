/*jslint browser */

function calculate(event) {
    "use strict";
    event.preventDefault();

    const quantityField = document.getElementById("quantity");
    const productField = document.getElementById("product");
    const error = document.getElementById("error");
    const result = document.getElementById("result");
    const pattern = /^\d+$/;

    error.textContent = "";
    result.textContent = "";

    if (quantityField.value.match(pattern) === null) {
        error.textContent = "Ошибка: в поле количества допустимы только цифры.";
        return;
    }

    const quantity = parseInt(quantityField.value, 10);
    const price = parseInt(productField.value, 10);

    result.textContent = "Стоимость заказа: " + (price * quantity) + " руб.";
}

window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const button = document.getElementById("calc-button");
    button.addEventListener("click", calculate);
});