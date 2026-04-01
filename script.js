const btnAddBook = document.querySelector('.btn');
const formContainer = document.getElementById('containerForm');
const containerLibrary = document.getElementById('containerLibrary');

btnAddBook.addEventListener('click', () => {
    formContainer.classList.toggle('hidden');
});

document.getElementById('send').addEventListener('click', () => {
    // 1. Captura os valores
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.querySelector('input[name="read"]:checked').value;

    // 2. Define o texto do Badge (CORREÇÃO DA VARIÁVEL)
    const isRead = readStatus === 'yes' ? 'Read' : 'Unread';

    // 3. Cria o HTML (Removi as linhas que tentavam alterar o DOM antes de criar o card)
    const cardHTML = `
        <div class="card">
            <div class="content">
                <div class="front">
                    <div class="front-content">
                        <strong>${title}</strong>
                    </div>
                </div>
                <div class="back">
                    <div class="back-details">
                        <small class="badge">${isRead}</small>
                        <div class="description">
                            <div class="title author-book">
                                <p><strong>${author}</strong></p>
                            </div>
                            <p class="card-footer">${pages} Páginas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 4. Injeta no container
    containerLibrary.innerHTML += cardHTML;
    
    // 5. Fecha e limpa
    formContainer.classList.add('hidden');
    document.getElementById('bookForm').reset();
});