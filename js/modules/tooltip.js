export default function inittoolTip() {

  const tooltips = document.querySelectorAll('[data-tooltip]')

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this) // this e referência ao tooltips (cada item que passar o hover) // add dentro de uma const para removela após finalizar hover

    onMouseMove.tooltipBox = tooltipBox
    this.addEventListener('mousemove', onMouseMove)

    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this // Referência ao objeto criado
    this.addEventListener('mouseleave', onMouseLeave) // this e o proprio onMouseOver
  }

  const onMouseLeave = {
    //tooltipBox: '', Não necessário declarar, ao menos se houver algun congelamento ou algo tipo
    //element: '', Não necessário declarar, ao menos se houver algun congelamento ou algo tipo
    handleEvent() { // Para q a função consiga pegar esse objeto e necessário haver o handleEvent como método obrigatório
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave) //remover Eventos
      this.element.removeEventListener('mousemove', onMouseMove)
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px'
      this.tooltipBox.style.left = event.pageX + 20 + 'px'
    }
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox) // ao final do body será add a tooltip
    return tooltipBox
  }
}

