let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

// abrir menu mobile
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

// fechar o menu mobile no 'x'
menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

// FECHAR AO CLICAR FORA DO MENU
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})