const editKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    event.target.blur()
  }
}

const saveEdit = (event, edit, property) => {
  edit[property] = event.target.innerHTML
}

export { editKeyPress, saveEdit }
