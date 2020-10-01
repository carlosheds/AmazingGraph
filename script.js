const menuToggle = document.querySelector('.menu-toggle')
const menuSection = document.querySelector('.menu-section')
const site = document.body

let menuOn = true

menuToggle.addEventListener('click', () => {
    menuSection.classList.toggle('on', menuOn)
    site.style.overflow = menuOn ? 'hidden' : 'initial'
    menuOn = !menuOn
})