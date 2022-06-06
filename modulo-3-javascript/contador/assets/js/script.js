var currentNumberWapp = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumberWapp.innerHTML = currentNumber;
    currentNumber =currentNumber + 1;
}

function decrement() {
    currentNumberWapp.innerHTML = currentNumber;
    currentNumber =currentNumber - 1;
}
