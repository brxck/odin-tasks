import format from "date-fns/format"

// Lexical scoping of 'this' in arrow functions causes problems here. See:
/* eslint-disable-next-line */
// https://derickbailey.com/2015/09/28/do-es6-arrow-functions-really-solve-this-in-javascript/

function createBoard (name) {
  const newBoard = {
    name: name,
    id: "board" + this.nextBoardId,
    nextTaskId: 0,
    tasks: [],
    createTask,

    deleteTask (id) {
      delete this.tasks[id]
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
    board: this.id,
    description: description,
    dueDate: dueDate,
    priority: priority,
    completed: false,


    displayDueDate () {
      return format(this.dueDate, "MM/DD/YY")
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
}

const deleteProject = id => {
  delete projects[id]
}

const projects = {
  createProject,
  deleteProject,
  list: [],
  nextProjectId: 0
}

export { createProject, deleteProject, projects }
