burger = document.querySelector('.burger')
header = document.querySelector('.header')
menuList = document.querySelector('.menu-list')

burger.addEventListener('click', ()=> {
    header.classList.toggle('header-h')
    menuList.classList.toggle('v-list')
})