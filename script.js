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

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var cookieBanner = document.getElementById('cookies');
  var cookieAccepted = getCookie('cookiesAccepted');
  if (cookieAccepted != "") {
    cookieBanner.style.display = 'none';
  } else {
    cookieBanner.style.display = 'block';
  }
}

document.getElementById('aceitar-cookies').addEventListener('click', function() {
  setCookie('cookiesAccepted', true, 365);
  document.getElementById('cookies').style.display = 'none';
});

checkCookie();

const imagens = document.querySelectorAll('#galeria ul li img');

function galeriaTrocar(event) {
  const principal = document.querySelector('#imagem-principal');
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.setAttribute('alt', clicada.getAttribute('alt'));
}

function galeriaClique(imagem) {
  imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClique);