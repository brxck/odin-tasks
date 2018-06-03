import { format, parse, isValid, isThisYear, distanceInWordsToNow } from "date-fns"
import seed from "./seed"
const Dry = require("json-dry")

class Task {
  constructor ({
    id,
    board,
    name,
    description = "",
    dueDate,
    priority,
    completed = false
  }) {
    this.id = id
    this.board = board
    this.name = name
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completed = completed
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
  constructor ({ id, project, name, nextId = 0, tasks = [] }) {
    this.id = id
    this.project = project
    this.name = name
    this.nextId = nextId
    this.tasks = tasks
  }

  createTask (properties) {
    properties.id = "task" + this.nextId
    properties.board = this
    const newTask = new Task(properties)
    this[newTask.id] = newTask
    this.tasks.push(newTask)
    this.nextId += 1
    return newTask
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
  constructor ({ id, name, nextId = 0, boards = [] }) {
    this.id = id
    this.name = name
    this.nextId = nextId
    this.boards = boards
  }

  createBoard (name) {
    const newBoard = new Board({ name: name, id: "board" + this.nextId, project: this })
    this[newBoard.id] = newBoard
    this.boards.push(newBoard)
    this.nextId += 1
    return newBoard
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
  constructor ({ list = [], nextId = 0 }) {
    this.list = list
    this.nextId = nextId
  }

  createProject (name) {
    const newProject = new Project({ name: name, id: "project" + this.nextId })
    this.list.push(newProject)
    this[newProject.id] = newProject
    this.nextId += 1
    return newProject
  }

  save () {
    console.log("saving", projects)
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
  list.forEach(item => (target[item.id] = item))
}

Dry.registerClass(Task)
Dry.registerClass(Board)
Dry.registerClass(Project)
Dry.registerClass(ToDo)

let projects
const saveState = localStorage.getItem("projects")

if (saveState) {
  projects = Dry.parse(saveState)
  console.log("loading", projects)
} else {
  console.log("seeding")
  projects = new ToDo({})
  seed(projects)
}

export default projects
