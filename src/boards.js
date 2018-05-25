const composeTask = (task) => {
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