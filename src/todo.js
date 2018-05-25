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

    toggleCompleted () {
      this.completed = !this.completed
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

const deleteProject = (id) => {
  delete projects[id]
}

const projects = {
  createProject,
  deleteProject,
  list: [],
  nextProjectId: 0
}

export { createProject, deleteProject, projects }
