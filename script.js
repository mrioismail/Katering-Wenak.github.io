const menu = document.getElementById('hamburger-menu')
const navbarNav = document.querySelector('.navbar-nav')

menu.addEventListener('click', function () {
   navbarNav.classList.toggle('active')
})

// klik diluar sidebar untuk mneghilangkan nav
const hamburger = document.querySelector('#hambuger-menu')

document.addEventListener('click', function (e) {
   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active')
   }
})
