import { format, parse, isValid, isThisYear, distanceInWordsToNow } from "date-fns"

// Lexical scoping of 'this' in arrow functions causes problems here. See:
/* eslint-disable-next-line */
// https://derickbailey.com/2015/09/28/do-es6-arrow-functions-really-solve-this-in-javascript/

function createBoard (name) {
  const newBoard = {
    name: name,
    id: "board" + this.nextBoardId,
    project: this,
    nextTaskId: 0,
    tasks: [],
    createTask,

    deleteTask (id) {
      let index = this.tasks.indexOf(this[id])
      delete this.tasks[index]
      delete this[id]
    },

    deleteBoard () {
      let index = this.project.boards.indexOf(this)
      delete this.project.boards[index]
      delete this.project[this]
    }
  }
  this.boards.push(newBoard)
  this[newBoard.id] = newBoard
  this.nextBoardId += 1
}

function createTask ({ name, description = "", dueDate, priority }) {
  let newTask = {
    id: "task" + this.nextTaskId,
    name: name,
    board: this,
    description: description,
    dueDate: dueDate,
    priority: priority,
    completed: false,

    deleteTask () {
      this.board.deleteTask(this.id)
    },

    displayDueDate () {
      return format(this.dueDate, "M/D/YY")
    },

    displayShortDueDate () {
      let display = format(this.dueDate, "M/D")
      if (!isThisYear(this.dueDate)) display += format(this.dueDate, "/YY")
      return display
    },

    dueDateDistance () {
      return distanceInWordsToNow(this.dueDate)
    },

    setDueDate (input) {
      const newDate = parse(input)
      if (isValid(newDate)) {
        this.dueDate = newDate
        return this.dueDate
      } else {
        return false
      }
    },

    toggleCompleted () {
      this.completed = !this.completed
    },

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
  this.tasks.push(newTask)
  this[newTask.id] = newTask
  this.nextTaskId += 1
  return newTask
}

function createProject (name) {
  let newProject = {
    id: "project" + this.nextProjectId,
    name: name,
    boards: [],
    nextBoardId: 0,
    createBoard
  }
  this.list.push(newProject)
  this[newProject.id] = newProject
  this.nextProjectId += 1

  return newProject
}

const deleteProject = id => {
  let index = this.list.indexOf(projects[id])
  delete this.list[index]
  delete projects[id]
}

const projects = {
  createProject,
  deleteProject,
  list: [],
  nextProjectId: 0
}

export default projects
