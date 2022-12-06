AOS.init();

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('abajo', window.scrollY > 0);
});


// header

const botonMenu = document.getElementById('menuHamburguesa')
const lineaMenu1 = document.getElementById('linea1')
const lineaMenu2 = document.getElementById('linea2')
const lineaMenu3 = document.getElementById('linea3')
const anchor = document.getElementById('anchor')
const navbar = document.getElementById('navbar')

botonMenu.addEventListener('click', ()=>{
lineaMenu1.classList.toggle('activeLineaMenu1')
lineaMenu2.classList.toggle('activeLineaMenu2')
lineaMenu3.classList.toggle('activeLineaMenu3')
navbar.classList.toggle('activeNavbar')
// anchor.classList.toggle('activeNavbarAnimation')

})
// header

const botonDark = document.getElementById('botonDark')
const body = document.getElementById('main')
botonDark.addEventListener('click', () =>{
    body.classList.toggle('darkMode')
    botonDark.classList.toggle('btnLightMode')
    
})   