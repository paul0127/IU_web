// 選單開關
let menu_btn = document.querySelector('.menu_btn')
let menu = document.querySelector('header ul.nav')
let sub_menu_btn = document.querySelectorAll('header ul.nav li.sub > a')
let search_btn = document.querySelector('header .nav_top .search_bar a')

menu_btn.addEventListener('click', () => {
  menu.classList.toggle('active')
  search_btn.parentNode.classList.remove('active')
})
search_btn.addEventListener('click', () => {
    search_btn.parentNode.classList.toggle('active')
  menu.classList.remove('active')
})

sub_menu_btn.forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log(window.innerWidth)
    if (window.innerWidth < 1000) {
      let sub_top_btn = item.parentNode
      event.preventDefault()
      sub_top_btn.classList.toggle('active')
    }
  })
})