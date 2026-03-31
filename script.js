const btnAddBook = document.querySelector('.btn');
const formContainer = document.getElementById('containerForm');

btnAddBook.addEventListener('click', () => {
    formContainer.classList.toggle('hidden');
});