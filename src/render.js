import { composeModal } from "./modal.js"
import { composeBoard } from "./boards.js"

const boardView = document.getElementById("board-view")
const projectTitle = document.getElementById("project-title")

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
  projectTitle.textContent = project.name
}

export { renderModal, renderBoards }
