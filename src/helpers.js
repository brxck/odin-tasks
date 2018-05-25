const createElement = (properties) => {
  let element = document.createElement(properties.tag)
  if (properties.className) { element.className = properties.className }
  if (properties.id) { element.id = properties.id }
  if (properties.content) { element.innerHTML = properties.content }
  if (properties.child) { element.appendChild(properties.child) }
  return element
}

const priorityClass = (priority) => {
  switch (priority) {
    case 0:
      return ""
    case 1:
      return "is-info"
    case 2:
      return "is-success"
    case 3:
      return "is-danger"
  }
}

export { createElement, priorityClass }
