const createProject = ({ name, description }) => {
  let newProject = {
    id: "project" + nextListId,
    name: name,
    description: description,
    tasks: { list: [] },
    nextTaskId: 0,

    createTask ({ name, description, dueDate, priority }) {
      let newTask = {
        id: "task" + this.nextTaskId,
        name: name,
        description: description,
        dueDate: dueDate,
        priority: priority,
        completed: false,

        toggleCompleted () {
          this.completed = !this.completed
        }
      }
      this.tasks.list.push(newTask)
      this.tasks[newTask.id] = newTask
      this.nextTaskId += 1
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

createProject({ name: "Get started", description: "Add some tasks here, or create a new list." })

export { createProject, deleteProject, projects }
