Para começar um projeto novo:
Copiar os arquivos dentro de projeto-template e executar os comandos:
npm install
npm run dev

Estrutura SCSS:
Main.scss importa os arquivos scss para renderizar pelo Main.js
O Primeiro arquivo importado é o Core.scss
O Core centraliza todos os arquivos básicos, mixins, variables e reset
Cada arquivo .scss deve importar separadamente o variables (modularização)

Estrutura JS:
Main.js importa o arquivo main.scss para aplicar o CSS na página
E fica encarregado de centralizar as importações de demais arquivos JS
