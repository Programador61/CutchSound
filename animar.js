const menuDiv = document.getElementById('menu-moble')
const betanimar = document.getElementById('btn-menu')  

menuDiv.addEventListener('click', animarmenu)

function animarmenu(){
    menuDiv.classList.toggle('abrir')
    betanimar.classList.toggle('ativo')
}