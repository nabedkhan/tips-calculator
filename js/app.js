const btn = document.getElementById('form');
const bills = document.getElementById('bills');
const tax = document.getElementById('tax-amount');
const tips = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount');
const result = document.querySelector('.result');

btn.addEventListener('submit', function (e) {
    e.preventDefault();

    let bill = parseInt(bills.value);
    if (bill) {
        setTimeout(() => {
            tax.value = taxCalculate(bill);
            tips.value = tipCalculate(bill);
            totalAmount.value = totalCalculate(bill);
            result.style.display = 'block';
        }, 1000)
    } else {
        alert('Please Enter the Amount');
    }
})

//Tip Calculate
function tipCalculate(amount) {
    let tipAmount = 0;
    if (amount <= 100) tipAmount = amount * .10;
    else if (amount > 100 && amount < 300) tipAmount = amount * .15;
    else tipAmount = amount * .20;
    return tipAmount;
}

// Tax Calculate
function taxCalculate(amount) {
    let taxAmount = 0;
    if (amount <= 100) taxAmount = amount * .01;
    else if (amount > 100 && amount < 300) taxAmount = amount * .02;
    else taxAmount = amount * .03;
    return taxAmount;
}

// Total Amount Calculate
function totalCalculate(amount) {
    let tips = tipCalculate(amount);
    let taxs = taxCalculate(amount);
    let totalPayment = amount + tips + taxs;
    return totalPayment;
}