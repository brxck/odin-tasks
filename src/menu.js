import { createElement, appendChildren } from "./helpers"
import { renderBoards } from "./render"

const composeMenu = (projects) => {
  const menu = createElement({tag: "aside", className: "menu"})
  const label = createElement({tag: "p", className: "menu-label", content: "projects"})
  const list = createElement({tag: "ul", className: "menu-list"})

  const projectElements = composeProjects(projects)

  appendChildren(menu, [label, list])
  appendChildren(list, projectElements)

  return menu
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

export { composeMenu, composeProjects }
