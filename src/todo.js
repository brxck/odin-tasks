const createProject = (name) => {
  let newProject = {
    id: "project" + nextListId,
    name: name,
    boards: [],
    nextBoardId: 0,

    createBoard (name) {
      const newBoard = {
        name: name,
        id: "board" + this.nextBoardId,
        nextTaskId: 0,
        tasks: [],

        createTask ({ name, description, dueDate, priority }) {
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
      }
      this.boards.push(newBoard)
      this[newBoard.id] = newBoard
      this.nextBoardId += 1
    },

    deleteTask (id) {
      delete this.tasks[id]
    }
  }
  projects.list.push(newProject)
  projects[newProject.id] = newProject
  nextListId += 1
}

const deleteProject = (id) => {
  delete projects[id]
}

const projects = { list: [] }
let nextListId = 0

createProject("Welcome")

export { createProject, deleteProject, projects }
