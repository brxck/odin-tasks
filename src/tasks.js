import { createElement, priorityClass } from "./helpers"
import { renderTaskModal } from "./modal"
import fontawesome from "@fortawesome/fontawesome"

const composeTasks = (board) => {
  const fragment = document.createDocumentFragment()

  board.tasks.forEach((task) => {
    const newTask = composeTask(task)
    newTask.querySelector(".media-content")
      .addEventListener("click", () => renderTaskModal(task))
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
  media.appendChild(left)
  media.appendChild(content)
  media.appendChild(icons)

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

export { composeTasks, composeTask }
