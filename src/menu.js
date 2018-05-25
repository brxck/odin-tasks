import { createElement } from "./helpers"
import { renderBoards } from "./boards"

const menuView = document.getElementById("menu-view")

const renderMenu = () => {
  const menu = createElement({tag: "aside", className: "menu"})
  const label = createElement({tag: "p", className: "menu-label", content: "projects"})
  const list = createElement({tag: "ul", className: "menu-list", id: "project-list"})

  menu.appendChild(label)
  menu.appendChild(list)
  menuView.appendChild(menu)
}

const renderProjects = (projects) => {
  const list = document.getElementById("project-list")
  const elements = composeProjects(projects)
  elements.forEach((element) => list.appendChild(element))
}

const composeProjects = (projects) => {
  const elements = []
  projects.list.forEach((project) => {
    let projectElement = createElement({
      tag: "li",
      content: `<a>${project.name}</a>`,
      eventListener: ["click", () => renderBoards(project)]
    })
    elements.push(projectElement)
  })
  return elements
}

export { renderMenu, renderProjects }
