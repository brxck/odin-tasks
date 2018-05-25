const createElement = ({ tag, className, id, content, child, eventListener }) => {
  let element = document.createElement(tag)
  if (className) { element.className = className }
  if (id) { element.id = id }
  if (content) { element.innerHTML = content }
  if (child) { element.appendChild(child) }
  if (eventListener) {
    element.addEventListener(eventListener[0], eventListener[1])
  }
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
