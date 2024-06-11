const buttons = document.querySelectorAll('.top-bar-nav-button')

buttons.forEach((navButtons) => {
    navButtons.addEventListener('mouseout', () => {
        navButtons.classList.remove('active')
    })
    navButtons.addEventListener('mouseover', () => {
        navButtons.classList.add('active')
    })
})