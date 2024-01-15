function scrollToSection(banner) {
  var section = document.getElementById(banner);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}