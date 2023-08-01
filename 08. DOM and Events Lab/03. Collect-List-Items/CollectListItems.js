function extractText() {
    const collection = Array.from(document.querySelectorAll('#items li'));
    const textArea = document.querySelector('#result');

    const text = collection.map((item) => item.textContent).join('\n');
    textArea.value = text;
}