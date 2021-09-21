let nav_btn = document.querySelector('.left_menu .nav_btn')

nav_btn.addEventListener('click',()=>{
  nav_btn.parentElement.classList.toggle('active')
  document.body.classList.toggle('fixed')
})