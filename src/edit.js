const editKeyPress = event => {
  if (event.key === "Enter") {
    event.preventDefault()
    event.target.blur()
  }
}

const saveEdit = (event, edit, property) => {
  edit[property] = event.target.innerHTML
  event.target.contentEditable = false
}

const makeEditable = (element, edit, property) => {
  element.addEventListener("click", e => {
    e.target.contentEditable = true
    e.target.focus()
  })
  element.addEventListener("keypress", e => editKeyPress(e))
  if (typeof edit !== "undefined") {
    element.addEventListener("focusout", e => saveEdit(e, edit, property))
  }
}

export { editKeyPress, saveEdit, makeEditable }
