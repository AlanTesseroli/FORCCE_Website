function mudouTamanho(){
    if (window.innerWidth >= 769){
        itens.style.display = "block"
    }
    else{
        itens.style.display = "none"
    }
  }
  
  
  function clickMenu(){
    if (itens.style.display == "block"){
        itens.style.display = "none"
    }
    else{
    itens.style.display = "block"
    }
  }

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

document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const to = "engenhariaLeandro83@gmail.com";
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;
    
    window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
  });