import { composeModal } from "./modal"
import { composeTaskCard } from "./tasks"
import { composeBoard } from "./boards"
import { composeMenu, composeProjects } from "./menu"
import { projects } from "./todo"
import { makeEditable } from "./edit"
import { createElement, appendChildren } from "./helpers"

const menuView = document.getElementById("menu-view")
const boardView = document.getElementById("board-view")
const titleView = document.getElementById("project-title")

let currentProject

const renderProject = projectId => {
  currentProject = projects[projectId]
  renderBoards(currentProject)
}

const renderModal = content => {
  const modal = composeModal(content)
  document.body.appendChild(modal)
}

const clearModal = () => {
  renderBoards(projects)
  document.getElementById("modal").remove()
}

const renderBoards = () => {
  boardView.innerHTML = ""
  currentProject.boards.forEach(board => {
    let newBoard = composeBoard(board)
    boardView.appendChild(newBoard)
  })
  titleView.textContent = currentProject.name
  makeEditable(titleView, currentProject, "name")
  // Duplicate named event listeners are discarded
  titleView.addEventListener("focusout", renderProjects)
}

const renderMenu = () => {
  const menu = composeMenu(projects)
  menuView.appendChild(menu)
}

const renderProjects = () => {
  const list = document.getElementById("project-list")
  const elements = composeProjects(projects)
  list.innerHTML = ""
  elements.forEach(element => list.appendChild(element))
}

const renderCreateTask = newTask => {
  const card = composeTaskCard(newTask)
  const footer = card.querySelector(".card-footer")
  const saveButton = createElement({
    tag: "p",
    className: "card-footer-item is-clickable",
    content: "<span>Save</span>",
    eventListener: ["click", clearModal]
  })
  const cancelButton = createElement({
    tag: "p",
    className: "card-footer-item is-clickable",
    content: "<span>Cancel</span>",
    eventListener: [
      "click",
      () => {
        newTask.deleteTask()
        clearModal()
      }
    ]
  })

  appendChildren(footer, [cancelButton, saveButton])
  renderModal(card)
}

export {
  renderProject,
  renderModal,
  clearModal,
  renderBoards,
  renderMenu,
  renderProjects,
  renderCreateTask
}
