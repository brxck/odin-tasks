const createTaskList = ({ name, description }) => {
  let newTaskList = {
    name: name,
    description: description,
    tasks: [],

    createTask ({ name, description, dueDate, priority }) {
      let newTask = {
        name: name,
        description: description,
        dueDate: dueDate,
        priority: priority,
        done: false,

        toggleDone () {
          this.done = !this.done
        }
      }
      this.tasks.push(newTask)
    }
  }
  lists.push(newTaskList)
}

const lists = []

createTaskList({ name: "Get started", description: "Add some tasks here, or create a new list." })

export { createTaskList, lists }
