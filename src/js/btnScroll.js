
const botaoFixo = document.querySelector('#botao-fixo')

window.addEventListener('scroll', function() {
  if( window.scrollY > 200 ){
    botaoFixo.style.opacity = '1'
  } else {
    botaoFixo.style.opacity = '0'
  }
})