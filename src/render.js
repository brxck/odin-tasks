const listView = document.getElementById("listView")

const render = (elements) => {
  for (let i in elements) {
    listView.append(elements[i])
  }
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
    className: "card-header"
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

  fragment.appendChild(card)
  card.appendChild(header)
  header.appendChild(title)
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

export default createProjectElement
