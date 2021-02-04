const openButton = document.getElementById('open')
const closeButton = document.getElementById('close')

const popupMenu = document.getElementById('popup')

openButton.addEventListener('click', () => {
    popupMenu.classList.add('open')
})

closeButton.addEventListener('click', () => {
    popupMenu.classList.remove('open')
})