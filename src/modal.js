import { createElement } from "./helpers"

const composeModal = (content) => {
  const modal = createElement({ tag: "div", className: "modal is-active", id: "modal" })
  const background = createElement({
    tag: "div",
    className: "modal-background",
    eventListener: ["click", clearModal]
  })
  const close = createElement({ tag: "button", className: "modal-close is-large" })

  modal.appendChild(background)
  modal.appendChild(close)
  modal.appendChild(content)

  return modal
}

const clearModal = () => {
  document.getElementById("modal").remove()
}

export { composeModal }
