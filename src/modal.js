import { createElement, appendChildren, priorityClass } from "./helpers"
import { composeTask } from "./tasks"
import distanceInWordsToNow from "date-fns/distance_in_words_to_now"

const renderModal = (content) => {
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

  document.body.appendChild(modal)
}

const clearModal = () => {
  document.getElementById("modal").remove()
}

const renderTaskModal = (task) => {
  renderModal(composeTaskCard(task))
}

const composeTaskCard = (task) => {
  const card = createElement({ tag: "article", className: "card" })
  const cardHead = createElement({ tag: "header", className: "card-header" })
  const cardTitle = composeTask(task)
  const cardContent = createElement({ tag: "div", className: "card-content" })
  const cardFoot = createElement({ tag: "footer", className: "card-footer" })

  cardContent.appendChild(composeCardContent(task))
  cardHead.appendChild(cardTitle)
  appendChildren(card, [cardHead, cardContent, cardFoot])

  return card
}

const composeCardContent = (task) => {
  const fragment = document.createDocumentFragment()

  const descriptionContent = task.description || "Add a description..."
  const descriptionClass = task.description || "has-text-grey-light"

  const description = createElement({
    tag: "p",
    content: descriptionContent,
    className: descriptionClass
  })

  const tagsContainer = createElement({
    tag: "div",
    className: "field is-grouped is-grouped-multiline",
    id: "card-tags"
  })

  const dueDate = composeCompoundTag([
    { content: "Due Date" },
    { content: distanceInWordsToNow(task.dueDate), className: "is-info" },
    { content: task.dueDate, className: "is-link" }
  ])

  const priority = composeCompoundTag([
    { content: "Priority" },
    { content: task.priority, className: priorityClass(task.priority) }
  ])

  appendChildren(tagsContainer, [dueDate, priority])
  appendChildren(fragment, [description, tagsContainer])

  return fragment
}

const composeCompoundTag = (tags) => {
  const controlContainer = createElement({tag: "div", className: "control"})
  const tagContainer = createElement({tag: "div", className: "tags has-addons"})

  tags.forEach((tag) => {
    let newTag = createElement({
      tag: "span",
      className: "tag " + tag.className || "",
      content: tag.content
    })
    tagContainer.appendChild(newTag)
  })

  controlContainer.appendChild(tagContainer)
  return controlContainer
}

export { renderTaskModal }
