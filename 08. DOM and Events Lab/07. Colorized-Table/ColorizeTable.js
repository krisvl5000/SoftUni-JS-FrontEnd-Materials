function colorize() {
    const tableRows = document.querySelectorAll('table tr');

    for (let i = 0; i < tableRows.length; i+=2) {
        tableRows[i].style.backgroundColor = 'Teal';
    }
}