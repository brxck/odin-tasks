const seed = (projects) => {
  projects.createProject("Welcome")

  projects.project0.createBoard("Get started")
  projects.project0.createBoard("This is a board")

  projects.project0.board0.createTask({
    name: "Create a task",
    dueDate: "5/5/2019",
    priority: 0
  })

  projects.project0.board0.createTask({
    name: "Create a board",
    dueDate: "5/5/2019",
    priority: 1
  })

  projects.project0.board0.createTask({
    name: "Create a project",
    dueDate: "5/5/2019",
    priority: 2
  })

  projects.project0.board0.createTask({
    name: "You can do it",
    dueDate: "5/5/2019",
    priority: 3
  })

  projects.project0.board1.createTask({
    name: "This is a task",
    dueDate: "5/5/2019",
    priority: 0
  })

  projects.project0.board1.createTask({
    name: "Tasks can have descriptions",
    description: "Like this one!",
    dueDate: "5/5/2019",
    priority: 0
  })

  projects.project0.board1.createTask({
    name: "And different priorities",
    dueDate: "5/5/2019",
    priority: 3
  })

  projects.project0.board1.createTask({
    name: "And due dates",
    dueDate: "5/5/2019",
    priority: 0
  })
}

export default seed
