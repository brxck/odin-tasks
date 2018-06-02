import { format, parse, isValid, isThisYear, distanceInWordsToNow } from "date-fns"
import seed from "./seed"
const Dry = require("json-dry")

class Task {
  constructor (id, { name, description = "", dueDate, priority }) {
    this.id = id
    this.board = this
    this.name = name
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completed = false
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
    return new Task(value.id, value)
  }
}

class Board {
  constructor (id, name, value = {}) {
    this.id = id
    this.project = value.project || this
    this.name = name
    this.nextId = value.nextId || 0
    this.tasks = value.tasks || []
  }

  createTask (properties) {
    const newTask = new Task("task" + this.nextId, properties)
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
    const board = new Board(value.id, value.name, value)
    Object.assign(board, value.tasks)
    return board
  }
}

class Project {
  constructor (id, name, value = {}) {
    this.id = id
    this.name = name
    this.boards = value.boards || []
    this.nextId = value.nextIdea || 0
  }

  createBoard (properties) {
    const newBoard = new Board("board" + this.nextId, properties)
    this[newBoard.id] = newBoard
    this.boards.push(newBoard)
    this.nextId += 1
    return newBoard
  }

  toDry () {
    return { value: Object.assign({}, this) }
  }

  static unDry (value) {
    const project = new Project(value.id, value.name, value)
    makeProperties(project, value.boards)
    return project
  }
}

class ToDo {
  constructor (value = {}) {
    this.list = value.list || []
    this.nextId = value.nextId || 0
  }

  createProject (name) {
    const newProject = new Project("project" + this.nextId, name)
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
  console.log("loading", { saveState }, projects)
} else {
  console.log("seeding")
  projects = new ToDo()
  seed(projects)
}

export default projects
