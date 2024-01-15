function scrollToSection(banner) {
  var section = document.getElementById(banner);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToSection(about) {
  var section = document.getElementById(about);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToSection(skills) {
  var section = document.getElementById(skills);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToSection(projects) {
  var section = document.getElementById(projects);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToSection(getintouch) {
  var section = document.getElementById(getintouch);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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