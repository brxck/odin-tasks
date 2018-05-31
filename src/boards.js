import { createElement } from "./helpers"
import { composeTasks } from "./tasks"
import { makeEditable } from "./edit"
import { renderCreateTask } from "./render"
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
  const iconLink = createElement({
    tag: "span",
    className: "card-header-icon"
  })

  const icon = createElement({
    tag: "span",
    className: "icon",
    content: `<i class="">${fontawesome.icon({ iconName: "plus" }).html}</i>`
  })

  makeEditable(title, board, "name")
  iconLink.addEventListener("click", e => {
    renderCreateTask(
      board.createTask({
        name: "New task",
        dueDate: Date.now() + 1000 * 60 * 60 * 24,
        priority: "low"
      })
    )
  })

  column.appendChild(card)
  card.appendChild(header)
  header.appendChild(title)
  iconLink.appendChild(icon)
  header.appendChild(iconLink)
  card.appendChild(content)

  return column
}

export { composeBoard }
