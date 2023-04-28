window.onload = function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navigations = document.querySelector('nav ul');
  
    hamburgerMenu.addEventListener('click', function() {
        navigations.classList.toggle('menu-active');
    });
  
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
        navigations.style.display = 'none';
        hamburgerMenu.style.display = 'block';
  
        hamburgerMenu.addEventListener('click', function() {
            navigations.classList.toggle('menu-active');
        });
    }
  };
  
  
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 
        const offsetTop = targetSection.offsetTop;
        window.scroll({
            top: offsetTop,
            behavior: 'smooth' 
        });
    });
});