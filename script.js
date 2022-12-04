AOS.init();

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('respmenu');
    navbar.classList.toggle('abajo', window.scrollY > 0);
});

addEventListener('click', () =>{
    const botonDark = document.getElementById('botonDark')
})

// header
const botonMenu = document.getElementById('menuHamburguesa')
const lineaMenu1 = document.getElementById('linea1')
const lineaMenu2 = document.getElementById('linea2')
const lineaMenu3 = document.getElementById('linea3')
const navbar = document.getElementById('navbar')

botonMenu.addEventListener('click', ()=>{
lineaMenu1.classList.toggle('activeLineaMenu1')
lineaMenu2.classList.toggle('activeLineaMenu2')
lineaMenu3.classList.toggle('activeLineaMenu3')
navbar.classList.toggle('activeNavbar')

})

// header