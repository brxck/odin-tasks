const view = document.getElementById("view")

const render = (elements, partial = false) => {
  if (partial) view.innerHtml = ""
  elements.forEach((element) => {
    view.appendChild(element)
  })
}

const renderProjects = (projects) => {
  const elements = []
  projects.list.forEach((project) => {
    let projectElement = createProjectElement(project)
    elements.push(projectElement)
  })
  render(elements)
}

const createProjectElement = (project) => {
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

export { createProjectElement, renderProjects }
