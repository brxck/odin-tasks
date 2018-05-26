const seed = (projects) => {
  projects.createProject("Welcome")
  projects.createProject("Empty")

  projects.project0.createBoard("Get started")
  projects.project0.createBoard("This is a board")

  projects.project0.board0.createTask({
    name: "Create a task",
    dueDate: "5/5/2019",
    priority: "low"
  })

  projects.project0.board0.createTask({
    name: "Create a board",
    dueDate: "5/5/2019",
    priority: "medium"
  })

  projects.project0.board0.createTask({
    name: "Create a project",
    dueDate: "5/5/2019",
    priority: "high"
  })

  projects.project0.board0.createTask({
    name: "You can do it",
    dueDate: "5/5/2019",
    priority: "urgent"
  })

  projects.project0.board1.createTask({
    name: "This is a task",
    dueDate: "5/5/2019",
    priority: "low"
  })

  projects.project0.board1.createTask({
    name: "Tasks can have descriptions",
    description: "Like this one!",
    dueDate: "5/5/2019",
    priority: "low"
  })

  projects.project0.board1.createTask({
    name: "And different priorities",
    dueDate: "5/5/2019",
    priority: "urgent"
  })

  projects.project0.board1.createTask({
    name: "And due dates",
    dueDate: "5/5/2019",
    priority: "low"
  })
}

export default seed
