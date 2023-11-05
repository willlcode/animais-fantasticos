import outsideClick from "./outsideclick.js"

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')

  dropdownMenus.forEach(menu => { 
    ['touchstart', 'click'].forEach(userEvent => { // Método para utilizar 2 eventos atráves de um array
      menu.addEventListener(userEvent, handleClick)
    })
  })

  function handleClick(event) {
    event.preventDefault()
    this.classList.add('active') // Oh this refere-se a cada item do loop do dropdownMenus, cada menu em si
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    })
  }
}