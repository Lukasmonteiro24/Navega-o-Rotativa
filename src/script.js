//* Navegação rotativa *//

//* 1-Pegar as referências HTML *//
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

//* 2-Adicionar o evento de click, e assim que clickado adicionar a classe show-nav *//
open.addEventListener('click', () => container.classList.add
('show-nav'))

//* 3-Adicionar o evento de click, e assim que clickado ira remover a classe show-nav *//
close.addEventListener('click', () => container.classList.remove
('show-nav')) 

