const createTaskList = ({ name, description }) => {
  let newList = {
    id: "list" + nextListId,
    name: name,
    description: description,
    tasks: {},
    nextTaskId: 0,

    createTask ({ name, description, dueDate, priority }) {
      let newTask = {
        id: "task" + this.nextTaskId,
        name: name,
        description: description,
        dueDate: dueDate,
        priority: priority,
        done: false,

        toggleDone () {
          this.done = !this.done
        }
      }
      this.tasks[newTask.id] = newTask
      this.nextTaskId += 1
    },

    deleteTask (id) {
      delete this.tasks[id]
    }
  }
  lists[newList.id] = newList
  nextListId += 1
}

const lists = {}
let nextListId = 0

createTaskList({ name: "Get started", description: "Add some tasks here, or create a new list." })

export { createTaskList, lists }
