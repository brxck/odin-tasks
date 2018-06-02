import { format, parse, isValid, isThisYear, distanceInWordsToNow } from "date-fns"
import CircularJSON from "circular-json"

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
}

class Board {
  constructor (id, name) {
    this.id = id
    this.project = this
    this.name = name
    this.nextId = 0
    this.tasks = []
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
}

class Project {
  constructor (id, name) {
    this.id = id
    this.name = name
    this.boards = []
    this.nextId = 0
  }

  createBoard (properties) {
    const newBoard = new Board("board" + this.nextId, properties)
    this[newBoard.id] = newBoard
    this.boards.push(newBoard)
    this.nextId += 1
    return newBoard
  }
}

class ToDo {
  constructor () {
    this.list = []
    this.nextId = 0
  }

  createProject (name) {
    const newProject = new Project("project" + this.nextId, name)
    this.list.push(newProject)
    this[newProject.id] = newProject
    this.nextId += 1
    return newProject
  }

  save () {}
}

const projects = new ToDo()

export default projects
