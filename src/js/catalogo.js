const miniaturas = document.querySelectorAll('.miniatura');
const cartazImg = document.getElementById('cartaz-img');
const cartazTitulo = document.getElementById('cartaz-titulo');
const cartazDescricao = document.getElementById('cartaz-descricao');
const cartazInfo = document.querySelector('.cartaz-info');

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', () => {
        const newImg = miniatura.getAttribute('data-img');
        const newTitulo = miniatura.getAttribute('data-titulo');
        const newDescricao = miniatura.getAttribute('data-descricao');

        // 🔥 Anima o fade-out da imagem
        cartazImg.style.opacity = 0;
        cartazInfo.classList.remove('active');

        // Aguarda a animação de fade-out terminar
        setTimeout(() => {
            // Atualiza imagem e textos
            cartazImg.src = newImg;
            cartazTitulo.textContent = newTitulo;
            cartazDescricao.textContent = newDescricao;

            // 🔥 Anima o fade-in
            cartazImg.style.opacity = 1;
            cartazInfo.classList.add('active');
        }, 300); // 300ms para sincronizar bonito com a animação
    });
});

// Quando carregar a página, já ativa o primeiro cartaz
window.addEventListener('load', () => {
    cartazInfo.classList.add('active');
});
