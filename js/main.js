// 選單開關
let menu_btn = document.querySelector('.menu_btn')
let menu = document.querySelector('header ul.nav')
let sub_menu_btn = document.querySelectorAll('header ul.nav li.sub > a')

menu_btn.addEventListener('click', () => {
  menu.classList.toggle('active')
  search_btn.parentNode.classList.remove('active')
  cart_btn.parentNode.classList.remove('active')
  member_btn.parentNode.classList.remove('active')
})

sub_menu_btn.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (window.innerWidth < 1000) {
      let sub_top_btn = item.parentNode
      event.preventDefault()
      sub_top_btn.classList.toggle('active')
    }
  })
})

let search_btn = document.querySelector('header .nav_top .search_bar a')
let cart_btn = document.querySelector('header .nav_top .cart_bar a')
let member_btn = document.querySelector('header .nav_top .member_bar a')

member_btn.addEventListener('click', () => {
  member_btn.parentNode.classList.toggle('active')
  cart_btn.parentNode.classList.remove('active')
  search_btn.parentNode.classList.remove('active')
  menu.classList.remove('active')
})

cart_btn.addEventListener('click', () => {
  cart_btn.parentNode.classList.toggle('active')
  search_btn.parentNode.classList.remove('active')
  member_btn.parentNode.classList.remove('active')
  menu.classList.remove('active')
})

search_btn.addEventListener('click', () => {
  search_btn.parentNode.classList.toggle('active')
  cart_btn.parentNode.classList.remove('active')
  member_btn.parentNode.classList.remove('active')
  menu.classList.remove('active')
})
