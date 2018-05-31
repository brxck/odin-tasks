const seed = projects => {
  projects.createProject("Welcome")
  projects.createProject("Empty")

  projects.project0.createBoard("Get started")
  projects.project0.createBoard("This is a board")

  const dueDate = Date.now() + 1000 * 60 * 60 * 24

  projects.project0.board0.createTask({
    name: "Create a task",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project0.board0.createTask({
    name: "Create a board",
    dueDate: dueDate,
    priority: "medium"
  })

  projects.project0.board0.createTask({
    name: "Create a project",
    dueDate: dueDate,
    priority: "high"
  })

  projects.project0.board0.createTask({
    name: "You can do it",
    dueDate: dueDate,
    priority: "urgent"
  })

  projects.project0.board1.createTask({
    name: "This is a task",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project0.board1.createTask({
    name: "Tasks can have descriptions",
    description: "Like this one!",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project0.board1.createTask({
    name: "And different priorities",
    dueDate: dueDate,
    priority: "urgent"
  })

  projects.project0.board1.createTask({
    name: "And due dates",
    dueDate: dueDate,
    priority: "low"
  })
}

export default seed
