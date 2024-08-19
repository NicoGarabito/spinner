document.getElementById('spinnerButton').addEventListener('click', function() {
    const spinner = document.getElementById('spinner');
    const button = document.getElementById('spinnerButton');

    if (spinner.style.display === 'none' || spinner.style.display === '') {
        spinner.style.display = 'block';
        button.textContent = 'Ocultar Spinner';
    } else {
        spinner.style.display = 'none';
        button.textContent = 'Mostrar Spinner';
    }
});