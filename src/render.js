import { composeModal } from "./modal.js"
import { composeBoard } from "./boards.js"
import { composeMenu, composeProjects } from "./menu.js"
import { projects } from "./todo"

const menuView = document.getElementById("menu-view")
const boardView = document.getElementById("board-view")
const titleView = document.getElementById("project-title")

let currentProject

const renderProject = (projectId) => {
  currentProject = projects[projectId]
  renderBoards(currentProject)
}

const renderModal = (content) => {
  const modal = composeModal(content)
  document.body.appendChild(modal)
}

const clearModal = () => {
  renderBoards(projects)
  document.getElementById("modal").remove()
}

const renderBoards = () => {
  boardView.innerHTML = ""
  currentProject.boards.forEach((board) => {
    let newBoard = composeBoard(board)
    boardView.appendChild(newBoard)
  })
  titleView.textContent = currentProject.name
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

export { renderProject, renderModal, clearModal, renderBoards, renderMenu, renderProjects }
