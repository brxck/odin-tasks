import { composeModal } from "./modal.js"
import { composeBoard } from "./boards.js"
import { composeMenu, composeProjects } from "./menu.js"

const menuView = document.getElementById("menu-view")
const boardView = document.getElementById("board-view")
const titleView = document.getElementById("project-title")

const renderModal = (content) => {
  const modal = composeModal(content)
  document.body.appendChild(modal)
}

const renderBoards = (project) => {
  boardView.innerHTML = ""
  project.boards.forEach((board) => {
    let newBoard = composeBoard(board)
    boardView.appendChild(newBoard)
  })
  titleView.textContent = project.name
}

const renderMenu = (projects) => {
  const menu = composeMenu(projects)
  menuView.appendChild(menu)
}

const renderProjects = (projects) => {
  const list = document.getElementById("project-list")
  const elements = composeProjects(projects)
  elements.forEach((element) => list.appendChild(element))
}

export { renderModal, renderBoards, renderMenu, renderProjects }
