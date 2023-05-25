// Menu Mobile

const botaoMobile = document.getElementById('botao-mobile');

function menuAtivado() {
  const menuHeader = document.querySelector('.menu-header');
  menuHeader.classList.toggle('active');
}

function botaoFechar(){
  botaoMobile.classList.toggle('botao-fechar')
}

botaoMobile.addEventListener('click', menuAtivado);

botaoMobile.addEventListener('click', botaoFechar);


const aceitarCookies = document.querySelector('.aceitar-cookies');

function fecharCookies(){
  const avisoCookies = document.querySelector('.cookies');
  avisoCookies.classList.toggle('fechado')
}

aceitarCookies.addEventListener('click', fecharCookies)