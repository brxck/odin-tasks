import { createElement, appendChildren } from "./helpers"
import { composeTasks } from "./tasks"
import { makeEditable } from "./edit"
import { renderProject, renderCreateTask } from "./render"
import fontawesome from "@fortawesome/fontawesome"

const composeBoard = board => {
  const column = createElement({ tag: "div", className: "column" })

  const card = createElement({
    tag: "article",
    className: "card",
    id: board.id
  })

  const header = createElement({
    tag: "div",
    className: "card-header"
  })

  const title = createElement({
    tag: "p",
    className: "card-header-title",
    content: board.name
  })

  const content = createElement({
    tag: "p",
    className: "card-content",
    id: board.id + "-tasks",
    child: composeTasks(board)
  })

  // Use for future icons
  const iconContainer = createElement({
    tag: "span",
    className: "card-header-icon"
  })

  const plusIcon = createElement({
    tag: "span",
    className: "icon",
    content: `<i class="">${fontawesome.icon({ iconName: "plus" }).html}</i>`
  })

  const trashIcon = createElement({
    tag: "span",
    className: "icon",
    content: `<i class="">${fontawesome.icon({ iconName: "trash" }).html}</i>`
  })

  makeEditable(title, board, "name")

  plusIcon.addEventListener("click", () => {
    renderCreateTask(
      board.createTask({
        name: "New task",
        dueDate: Date.now() + 1000 * 60 * 60 * 24,
        priority: "low"
      })
    )
  })

  trashIcon.addEventListener("click", () => {
    board.deleteBoard()
    renderProject()
  })

  column.appendChild(card)
  card.appendChild(header)
  header.appendChild(title)
  appendChildren(iconContainer, [plusIcon, trashIcon])
  header.appendChild(iconContainer)
  card.appendChild(content)

  return column
}

export { composeBoard }
