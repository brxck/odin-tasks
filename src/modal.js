import { createElement, appendChildren } from "./helpers"
import { clearModal } from "./render"

const composeModal = content => {
  const modal = createElement({ tag: "div", className: "modal is-active", id: "modal" })
  const background = createElement({
    tag: "div",
    className: "modal-background",
    eventListener: ["click", clearModal]
  })
  const close = createElement({
    tag: "button",
    className: "modal-close is-large",
    eventListener: ["click", clearModal]
  })

  appendChildren(modal, [background, close, content])

  return modal
}

export { composeModal }
