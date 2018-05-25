const viewColumn = document.getElementById("view-column")
const menuColumn = document.getElementById("menu-column")

const render = (elements, partial = false) => {
  if (partial) viewColumn.innerHtml = ""
  elements.forEach((element) => {
    viewColumn.appendChild(element)
  })
}

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

const createTaskElement = (project) => {
  const fragment = document.createDocumentFragment()

  const card = createElement({
    tag: "article",
    className: "card",
    id: project.id
  })

  const header = createElement({
    tag: "div",
    className: "card-header clickable"
  })

  const title = createElement({
    tag: "p",
    className: "card-header-title",
    content: project.name
  })

  const content = createElement({
    tag: "p",
    className: "card-content",
    content: project.description
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

  fragment.appendChild(card)
  card.appendChild(header)
  header.appendChild(title)
  iconLink.appendChild(icon)
  header.appendChild(iconLink)
  card.appendChild(content)

  return fragment
}

const createElement = (properties) => {
  let element = document.createElement(properties.tag)
  if (properties.className) { element.className = properties.className }
  if (properties.id) { element.id = properties.id }
  if (properties.content) { element.innerHTML = properties.content }
  return element
}

export { renderMenu, renderProjects }
