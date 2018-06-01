import { createElement, appendChildren, priorityClass } from "./helpers"
import { renderModal, clearModal } from "./render"
import fontawesome from "@fortawesome/fontawesome"
import distanceInWordsToNow from "date-fns/distance_in_words_to_now"
import { makeEditable } from "./edit"

const composeTasks = board => {
  const fragment = document.createDocumentFragment()

  board.tasks.forEach(task => {
    const newTask = composeTask(task)
    fragment.appendChild(newTask)
    newTask.addEventListener("click", event => taskView(event, task))
  })

  return fragment
}

const composeTask = task => {
  const media = createElement({
    tag: "article",
    className: "media is-clickable",
    id: task.id
  })
  const left = createElement({ tag: "div", className: "media-left" })
  const content = createElement({
    tag: "div",
    className: "media-content",
    content: task.name
  })
  const icons = createElement({ tag: "div", className: "media-right is-pulled-right" })
  const checkbox = composeCheckbox(task)

  left.appendChild(checkbox)
  appendChildren(media, [left, content, icons])

  return media
}

const taskView = (event, task) => {
  if (event.target.classList.contains("button")) return
  const taskCard = composeTaskCard(task)
  renderModal(taskCard)
}

const composeCheckbox = task => {
  const button = createElement({
    tag: "button",
    className: "button " + priorityClass(task.priority),
    id: "checkbox",
    eventListener: ["click", event => toggleCheckbox(event, task)]
  })
  const iconContainer = createElement({ tag: "span", className: "icon" })
  const icon = createElement({
    tag: "i",
    content: fontawesome.icon({ iconName: "check" }).html
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

const cyclePriorityTag = (event, task) => {
  task.togglePriority()
  event.target.innerHTML = task.priority
  event.target.className = "tag " + priorityClass(task.priority)
  const checkbox = document.getElementById("modal").querySelector("#checkbox")
  checkbox.className = "button " + priorityClass(task.priority)
}

const composeTaskCard = task => {
  const card = createElement({ tag: "article", className: "card" })
  const cardHead = createElement({ tag: "header", className: "card-header" })
  const cardContent = createElement({ tag: "div", className: "card-content" })
  const cardFoot = createElement({ tag: "footer", className: "card-footer" })

  const cardTitle = composeTask(task)
  const iconContainer = cardTitle.querySelector(".media-right")
  const deleteIcon = createElement({
    tag: "i",
    className: "icon",
    content: fontawesome.icon({ iconName: "trash" }).html
  })
  deleteIcon.addEventListener("click", () => {
    task.deleteTask()
    clearModal()
  })
  makeEditable(cardTitle.querySelector(".media-content"), task, "name")

  iconContainer.appendChild(deleteIcon)
  cardContent.appendChild(composeCardContent(task))
  cardHead.appendChild(cardTitle)
  appendChildren(card, [cardHead, cardContent, cardFoot])

  return card
}

const composeCardContent = task => {
  const fragment = document.createDocumentFragment()

  const descriptionContent = task.description || "Add a description..."

  const description = createElement({
    tag: "p",
    content: descriptionContent
  })

  const tagsContainer = createElement({
    tag: "div",
    className: "field is-grouped is-grouped-multiline",
    id: "card-tags"
  })

  const dueDate = composeCompoundTag([
    { content: "Due Date" },
    { content: distanceInWordsToNow(task.dueDate), className: "is-info", id: "distance" },
    { content: task.displayDueDate(), className: "is-link", id: "due-date" }
  ])

  const priority = composeCompoundTag([
    { content: "Priority" },
    {
      content: task.priority,
      className: priorityClass(task.priority),
      eventListener: ["click", event => cyclePriorityTag(event, task)]
    }
  ])

  const dateField = dueDate.querySelector("#due-date")
  dateField.addEventListener("focusout", e => {
    task.setDueDate(e.target.textContent)
    e.target.textContent = task.displayDueDate()
    dueDate.querySelector("#distance").textContent = distanceInWordsToNow(task.dueDate)
  })
  makeEditable(dateField)
  makeEditable(description, task, "description")

  appendChildren(tagsContainer, [dueDate, priority])
  appendChildren(fragment, [description, tagsContainer])

  return fragment
}

const composeCompoundTag = tags => {
  const controlContainer = createElement({ tag: "div", className: "control" })
  const tagContainer = createElement({ tag: "div", className: "tags has-addons" })

  tags.forEach(tag => {
    let newTag = createElement({
      tag: "span",
      id: tag.id,
      className: "tag " + tag.className || "",
      content: tag.content,
      eventListener: tag.eventListener
    })
    tagContainer.appendChild(newTag)
  })

  controlContainer.appendChild(tagContainer)
  return controlContainer
}

const composeCreateTask = newTask => {
  const card = composeTaskCard(newTask)
  const footer = card.querySelector(".card-footer")
  const saveButton = createElement({
    tag: "p",
    className: "card-footer-item is-clickable",
    content: "<span>Save</span>",
    eventListener: ["click", clearModal]
  })
  const cancelButton = createElement({
    tag: "p",
    className: "card-footer-item is-clickable",
    content: "<span>Cancel</span>",
    eventListener: [
      "click",
      () => {
        newTask.deleteTask()
        clearModal()
      }
    ]
  })

  appendChildren(footer, [cancelButton, saveButton])
  return card
}

export { composeTasks, composeTask, composeTaskCard, composeCreateTask }
