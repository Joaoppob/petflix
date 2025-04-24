import '../scss/main.scss';
import './navbarMobile.js';
import './automaticDarkMode.js';
import './cta.js';
import './fixedNavBar.js';

console.log('JS carregado com sucesso!');

const botao = document.querySelector('#meu-botao');
if (botao) {
  botao.addEventListener('click', () => {
    alert('Você clicou no botão!');
  });
}
