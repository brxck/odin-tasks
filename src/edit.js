const editKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    event.target.blur()
  }
}

const saveEdit = (event, edit, property) => {
  edit[property] = event.target.innerHTML
}

const makeEditable = (element, target, property) => {
  element.contentEditable = true
  element.addEventListener("keypress", (event) => editKeyPress(event))
  element.addEventListener("focusout", (event) => saveEdit(event, target, property))
}

export { editKeyPress, saveEdit, makeEditable }
