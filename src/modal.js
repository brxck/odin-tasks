import { createElement, priorityClass } from "./helpers"

const renderModalCard = (task) => {
  const modal = createElement({ tag: "div", className: "modal is-active", id: "modal" })
  const background = createElement({
    tag: "div",
    className: "modal-background",
    eventListener: ["click", clearModal]
  })
  const close = createElement({ tag: "button", className: "modal-close is-large" })
  const card = composeTaskCard(task)

  modal.appendChild(background)
  modal.appendChild(card)
  modal.appendChild(close)

  document.body.appendChild(modal)
}

const clearModal = () => {
  document.getElementById("modal").remove()
}

const composeTaskCard = (task) => {
  const card = createElement({ tag: "article", className: "card" })
  const cardHead = createElement({ tag: "header", className: "card-header level" })
  const cardTitle = createElement({
    tag: "p",
    className: "card-header-title",
    content: task.name
  })
  const cardBody = createElement({
    tag: "div",
    className: "card-content",
    content: task.description
  })
  const cardFoot = createElement({ tag: "footer", className: "card-footer" })

  card.appendChild(cardHead)
  card.appendChild(cardBody)
  card.appendChild(cardFoot)
  cardHead.appendChild(cardTitle)

  return card
}

export { renderModalCard }
