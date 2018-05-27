const createElement =
  ({ tag, className, id, content, child, eventListener, options }) => {
    let element = document.createElement(tag)
    if (className) { element.className = className }
    if (id) { element.id = id }
    if (content) { element.innerHTML = content }
    if (child) { element.appendChild(child) }
    if (eventListener) {
      element.addEventListener(eventListener[0], eventListener[1])
    }
    if (options) {
      options.forEach(([ attribute, value ]) => {
        element[attribute] = value
      })
    }
    return element
  }

const appendChildren = (parent, children) => {
  children.forEach((child) => parent.appendChild(child))
}

const priorityClass = (priority) => {
  switch (priority) {
    case "low":
      return ""
    case "medium":
      return "is-info"
    case "high":
      return "is-success"
    case "urgent":
      return "is-danger"
  }
}

export { createElement, appendChildren, priorityClass }
