import { format, parse, isValid, isThisYear, distanceInWordsToNow } from "date-fns"
import seed from "./seed"
const Dry = require("json-dry")

class Task {
  constructor ({
    id,
    boardId,
    name,
    description = "",
    dueDate,
    priority,
    completed = false
  }) {
    this.id = id
    this.boardId = boardId
    this.name = name
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completed = completed
  }

  get board () {
    return projects.search(this.boardId)
  }

  remove () {
    this.board.deleteTask(this.id)
  }

  displayDueDate () {
    return format(this.dueDate, "M/D/YY")
  }

  displayShortDueDate () {
    let display = format(this.dueDate, "M/D")
    if (!isThisYear(this.dueDate)) display += format(this.dueDate, "/YY")
    return display
  }

  dueDateDistance () {
    return distanceInWordsToNow(this.dueDate)
  }

  setDueDate (input) {
    const newDate = parse(input)
    if (isValid(newDate)) {
      this.dueDate = newDate
      return this.dueDate
    } else {
      return false
    }
  }

  toggleCompleted () {
    this.completed = !this.completed
  }

  togglePriority () {
    const priority = this.priority
    // Immediately invoked arrow fn to assign from switch
    this.priority = (priority => {
      switch (priority) {
        case "low":
          return "medium"
        case "medium":
          return "high"
        case "high":
          return "urgent"
        case "urgent":
          return "low"
      }
    })(priority)
  }

  toDry () {
    // Serialize all enumerable properties
    return { value: Object.assign({}, this) }
  }

  static unDry (value) {
    return new Task(value)
  }
}

class Board {
  constructor ({ id, projectId, name, nextId = 0, tasks = [] }) {
    this.id = id
    this.projectId = projectId
    this.name = name
    this.nextId = nextId
    this.tasks = tasks
  }

  createTask (properties) {
    properties.id = "task" + projects.nextTaskId
    projects.nextTaskId += 1

    properties.boardId = this.id
    const newTask = new Task(properties)

    this[newTask.id] = newTask
    this.tasks.push(newTask)
    projects.register[newTask.id] = newTask

    return newTask
  }

  get project () {
    return projects.search(this.projectId)
  }

  deleteTask (id) {
    let index = this.tasks.indexOf(this[id])
    delete this.tasks[index]
    delete this[id]
  }

  deleteBoard () {
    let index = this.project.boards.indexOf(this)
    delete this.project.boards[index]
    delete this.project[this]
  }

  toDry () {
    return { value: Object.assign({}, this) }
  }

  static unDry (value) {
    const board = new Board(value)
    makeProperties(board, board.tasks)
    return board
  }
}

class Project {
  constructor ({ id, name, controller, nextId = 0, boards = [] }) {
    this.id = id
    this.name = name
    this.controller = controller
    this.nextId = nextId
    this.boards = boards
  }

  createBoard (name) {
    const newBoard = new Board({
      name: name,
      id: "board" + projects.nextBoardId,
      projectId: this.id
    })
    projects.nextBoardId += 1

    this[newBoard.id] = newBoard
    this.boards.push(newBoard)
    projects.register[newBoard.id] = newBoard

    return newBoard
  }

  deleteProject () {
    let index = this.controller.list.indexOf(this)
    delete this.controller.list[index]
    delete this.controller[this]
  }

  toDry () {
    return { value: Object.assign({}, this) }
  }

  static unDry (value) {
    const project = new Project(value)
    makeProperties(project, project.boards)
    return project
  }
}

class ToDo {
  constructor ({
    list = [],
    register = [],
    nextTaskId = 0,
    nextBoardId = 0,
    nextProjectId = 0
  }) {
    this.list = list
    this.register = register
    this.nextTaskId = nextTaskId
    this.nextBoardId = nextBoardId
    this.nextProjectId = nextProjectId
  }

  createProject (name) {
    const newProject = new Project({
      name: name,
      id: "project" + projects.nextProjectId,
      controller: this
    })
    projects.nextProjectId += 1

    this.list.push(newProject)
    this[newProject.id] = newProject
    projects.register[newProject.id] = newProject

    return newProject
  }

  search (id) {
    return this.register[id]
  }

  save () {
    localStorage.setItem("projects", Dry.stringify(this))
  }

  toDry () {
    return { value: Object.assign({}, this) }
  }

  static unDry (value) {
    const container = new ToDo(value)
    makeProperties(container, value.list)
    return container
  }
}

const makeProperties = (target, list) => {
  list.forEach(item => {
    if (item === null) return
    target[item.id] = item
  })
}

Dry.registerClass(Task)
Dry.registerClass(Board)
Dry.registerClass(Project)
Dry.registerClass(ToDo)

let projects
const saveState = localStorage.getItem("projects")

if (saveState) {
  projects = Dry.parse(saveState)
} else {
  projects = new ToDo({})
  seed(projects)
}

export default projects
