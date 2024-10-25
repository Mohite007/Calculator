let display = document.querySelector('.text-box');

// Append a number to the display
function appendNumber(number) {
    display.value += number;
}

// Append an operator to the display
function appendOperator(operator) {
    display.value += operator;
}

// Calculate the expression in the display
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character in the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
