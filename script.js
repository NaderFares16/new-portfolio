function scrollToSection(banner) {
  var section = document.getElementById(banner);
  if (section) {
      var offset = section.getBoundingClientRect().top - 40;
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, offset);
  }
}

// RETURN BUTTON 

function voltarAoTopo() {
  document.body.scrollTop = 0; // Para navegadores mais antigos
  document.documentElement.scrollTop = 0; // Para navegadores modernos
}

// Exibir ou ocultar o botão conforme o usuário rola a página
window.onscroll = function() {
  mostrarOcultarBotao();
};

function mostrarOcultarBotao() {
  var btnTopo = document.getElementById("return");

  // Mostrar o botão quando o usuário rolar mais de 300 pixels para baixo
  if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
      btnTopo.style.display = "block";
  } else {
      btnTopo.style.display = "none";
  }
}

const drawer = document.querySelector('.drawer-overview');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('sl-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());