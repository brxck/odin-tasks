import { createElement, appendChildren } from "./helpers"
import { renderProject } from "./render"

const composeMenu = (projects) => {
  const menu = createElement({tag: "aside", className: "menu"})
  const projectLabel = createElement({
    tag: "p",
    className: "menu-label",
    content: "projects"
  })
  const controlLabel = createElement({
    tag: "p",
    className: "menu-label",
    content: "odin-todo"
  })
  const controlList = createElement({ tag: "ul", className: "menu-list" })
  const projectList = createElement({tag: "ul", className: "menu-list"})
  const controlElements = [
    createElement({
      tag: "li",
      content: "<a>Create project</a>"
    }),
    createElement({
      tag: "li",
      content: "<a>New board</a>"
    })
  ]
  const projectElements = composeProjects(projects)

  appendChildren(menu, [controlLabel, controlList, projectLabel, projectList])
  appendChildren(controlList, controlElements)
  appendChildren(projectList, projectElements)

  return menu
}

const composeProjects = (projects) => {
  const elements = []
  projects.list.forEach((project) => {
    let projectElement = createElement({
      tag: "li",
      content: `<a>${project.name}</a>`,
      eventListener: ["click", () => renderProject(project.id)]
    })
    elements.push(projectElement)
  })
  return elements
}

export { composeMenu, composeProjects }
