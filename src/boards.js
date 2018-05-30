import { createElement } from "./helpers"
import { composeTasks } from "./tasks"
import { makeEditable } from "./edit"
import { renderMenu } from "./render"

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
    tag: "a",
    className: "card-header-icon"
  })

  const icon = createElement({
    tag: "span",
    className: "icon",
    content: `<i class="">${""}</i>`
  })

  makeEditable(title, board, "name")

  column.appendChild(card)
  card.appendChild(header)
  header.appendChild(title)
  iconLink.appendChild(icon)
  header.appendChild(iconLink)
  card.appendChild(content)

  return column
}

export { composeBoard }
