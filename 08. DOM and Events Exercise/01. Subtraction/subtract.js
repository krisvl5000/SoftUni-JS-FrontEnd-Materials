function subtract() {
    const firstValue = document.getElementById('firstNumber').value;
    const secondValue = document.getElementById('secondNumber').value;

    const result = document.getElementById('result');

    result.textContent = Number(firstValue) - Number(secondValue);
}