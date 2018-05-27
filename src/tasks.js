import { createElement, appendChildren, priorityClass } from "./helpers"
import { renderModal } from "./render"
import fontawesome from "@fortawesome/fontawesome"
import distanceInWordsToNow from "date-fns/distance_in_words_to_now"

const composeTasks = (board) => {
  const fragment = document.createDocumentFragment()

  board.tasks.forEach((task) => {
    const newTask = composeTask(task)
    newTask.querySelector(".media-content")
      .addEventListener("click", () => renderModal(composeTaskCard(task)))
    fragment.appendChild(newTask)
  })

  return fragment
}

const composeTask = (task) => {
  const media = createElement({
    tag: "article",
    className: "media",
    id: task.id
  })
  const left = createElement({ tag: "div", className: "media-left" })
  const content = createElement({
    tag: "p",
    className: "media-content is-clickable",
    content: task.name
  })
  const icons = createElement({ tag: "div", className: "media-right" })
  const checkbox = composeCheckbox(task)

  left.appendChild(checkbox)
  appendChildren(media, [left, content, icons])

  return media
}

const composeCheckbox = (task) => {
  const button = createElement({
    tag: "button",
    className: "button " + priorityClass(task.priority),
    eventListener: ["click", (event) => toggleCheckbox(event, task)]
  })
  const iconContainer = createElement({ tag: "span", className: "icon" })
  const icon = createElement({
    tag: "i",
    content: fontawesome.icon({iconName: "check"}).html
  })

  if (!task.completed) iconContainer.classList.add("is-clear")

  button.appendChild(iconContainer)
  iconContainer.appendChild(icon)
  return button
}

const toggleCheckbox = (event, task) => {
  task.toggleCompleted()
  event.target.firstChild.classList.toggle("is-clear")
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

export { composeTasks, composeTask }
