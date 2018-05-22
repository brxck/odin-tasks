const todo = () => {
  const lists = []

  const createTaskList = ({ name, description }) => {
    let newTaskList = {
      name: name,
      description: description,
      tasks: [],

      createTask ({ name, description, dueDate, priority, done }) {
        let newTask = {
          name: name,
          description: description,
          dueDate: dueDate,
          priority: priority,
          done: done,

          toggleDone () {
            this.done = !this.done
          }
        }

        this.tasks.push(newTask)
      }
    }

    lists.push(newTaskList)
  }
}
