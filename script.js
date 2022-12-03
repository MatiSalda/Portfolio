AOS.init();

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('respmenu');
    navbar.classList.toggle('abajo', window.scrollY > 0);
});

addEventListener('click', () =>{
    const botonDark = document.getElementById('botonDark')
    
})