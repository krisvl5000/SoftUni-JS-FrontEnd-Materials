function subtract() {
    const firstValue = document.querySelectorById('firstNumber').value;
    const secondValue = document.querySelectorById('secondNumber').value;

    const result = document.getElementById('result');

    result.textContent = Number(firstValue) - Number(secondValue);
}