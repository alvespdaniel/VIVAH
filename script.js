const botaoMobile = document.getElementById('botao-mobile');

function menuAtivado() {
  const menuHeader = document.querySelector('.menu-header')
  menuHeader.classList.toggle('active');
}

botaoMobile.addEventListener('click', menuAtivado);