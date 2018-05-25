import { createElement } from "./helpers"

const menuColumn = document.getElementById("menu-column")

const renderMenu = () => {
  const menu = createElement({tag: "aside", className: "menu"})
  const label = createElement({tag: "p", className: "menu-label", content: "projects"})
  const list = createElement({tag: "ul", className: "menu-list", id: "project-list"})

  menu.appendChild(label)
  menu.appendChild(list)
  menuColumn.appendChild(menu)
}

const renderProjects = (projects) => {
  const list = document.getElementById("project-list")
  const elements = composeProjects(projects)
  elements.forEach((element) => list.appendChild(element))
}

const composeProjects = (projects) => {
  const elements = []
  projects.list.forEach((project) => {
    let projectElement = createElement({tag: "li", content: `<a>${project.name}</a>`})
    // projectElement.addEventListener(() => {    })
    elements.push(projectElement)
  })
  return elements
}

export { renderMenu, renderProjects }
