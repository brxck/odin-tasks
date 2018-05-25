import { createElement } from "./helpers"

const renderModalCard = (task) => {
  const modal = createElement({ tag: "div", className: "modal is-active", id: "modal" })
  const background = createElement({
    tag: "div",
    className: "modal-background",
    eventListener: ["click", clearModal]
  })
  const modalCard = createElement({ tag: "article", className: "modal-card" })
  const modalCardHead = createElement({ tag: "header", className: "modal-card-head" })
  const modalCardTitle = createElement({
    tag: "p",
    className: "modal-card-title",
    content: task.name
  })
  const modalCardBody = createElement({ tag: "div", className: "modal-card-body" })
  const modalCardFoot = createElement({ tag: "footer", className: "modal-card-foot" })

  modal.appendChild(background)
  modal.appendChild(modalCard)
  modalCard.appendChild(modalCardHead)
  modalCard.appendChild(modalCardBody)
  modalCard.appendChild(modalCardFoot)
  modalCardHead.appendChild(modalCardTitle)

  document.body.appendChild(modal)
}

const clearModal = () => {
  document.getElementById("modal").remove()
}

export { renderModalCard }
