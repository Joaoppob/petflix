// 🖼️ Importando as imagens do projeto diretamente
import StrangerCats from '@/assets/img/StrangerCats.jpg';
import BreakingBark from '@/assets/img/BreakingBark.jpg';
import HouseOfBarks from '@/assets/img/HouseOfBarks.jpg';
import SherlockBones from '@/assets/img/SherlockBones.jpg';

// Mapeamento de nomes para as imagens processadas pelo Vite
const imagemMap = {
    'StrangerCats': StrangerCats,
    'BreakingBark': BreakingBark,
    'HouseOfBarks': HouseOfBarks,
    'SherlockBones': SherlockBones,
};

const miniaturas = document.querySelectorAll('.miniatura');
const cartazImg = document.getElementById('cartaz-img');
const cartazTitulo = document.getElementById('cartaz-titulo');
const cartazDescricao = document.getElementById('cartaz-descricao');
const cartazInfo = document.querySelector('.cartaz-info');

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', () => {
        const key = miniatura.dataset.img;
        const newImg = imagemMap[key];
        const newTitulo = miniatura.dataset.titulo;
        const newDescricao = miniatura.dataset.descricao;

        cartazImg.style.opacity = 0;
        cartazInfo.classList.remove('active');

        setTimeout(() => {
            cartazImg.src = newImg;
            cartazTitulo.textContent = newTitulo;
            cartazDescricao.textContent = newDescricao;

            cartazImg.style.opacity = 1;
            cartazInfo.classList.add('active');
        }, 300);
    });
});

// Ativa primeiro cartaz
window.addEventListener('load', () => {
    cartazInfo.classList.add('active');
});
