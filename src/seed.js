const seed = projects => {
  projects.createProject("OdinTasks")
  projects.project0.createBoard("Let's get started")
  projects.project0.createBoard("This is a board")

  projects.createProject("About")
  projects.project1.createBoard("brxck")
  projects.project1.createBoard("This is a project for")
  projects.project1.createBoard("Made using:")

  const dueDate = Date.now() + 1000 * 60 * 60 * 24

  projects.project0.board0.createTask({
    name: "Create a task",
    description: "Press the board's plus button.",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project0.board0.createTask({
    name: "Create a board",
    description: "In the menu to the left.",
    dueDate: dueDate,
    priority: "medium"
  })

  projects.project0.board0.createTask({
    name: "Create a project",
    description: "Also in the menu to the left.",
    dueDate: dueDate,
    priority: "high"
  })

  projects.project0.board0.createTask({
    name: "You can do it",
    description: "Just click text to edit it! Try on names and descriptions.",
    dueDate: dueDate,
    priority: "urgent"
  })

  projects.project0.board1
    .createTask({
      name: "Click tasks for details",
      dueDate: dueDate,
      priority: "low"
    })
    .toggleCompleted()

  projects.project0.board1.createTask({
    name: "Tasks can have descriptions",
    description: "Like this one! Click me to edit.",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project0.board1.createTask({
    name: "And different priorities",
    description: "Click the tag below to toggle priority.",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project0.board1.createTask({
    name: "And due dates",
    description: "Click the due date tag to edit.",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project1.board0.createTask({
    name: "My personal website",
    description: "http://brockmcelroy.com",
    dueDate: dueDate,
    priority: "medium"
  })

  projects.project1.board0.createTask({
    name: "This project on GitHub",
    description: "https://github.com/brxck/odin-tasks",
    dueDate: dueDate,
    priority: "high"
  })

  projects.project1.board1.createTask({
    name: "The Odin Project",
    description: "https://www.theodinproject.com/",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project1.board1.createTask({
    name: "JavaScript course",
    description: "https://www.theodinproject.com/courses/javascript/lessons/todo-list",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project1.board2.createTask({
    name: "webpack",
    description: "https://webpack.js.org/",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project1.board2.createTask({
    name: "Pug",
    description: "https://pugjs.org",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project1.board2.createTask({
    name: "Bulma",
    description: "https://bulma.io/",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project1.board2.createTask({
    name: "Font Awesome Icons",
    description: "https://fontawesome.com/",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project1.board2.createTask({
    name: "date-fns",
    description: "https://date-fns.org/",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project1.board2.createTask({
    name: "(Too much) vanilla JavaScript",
    description: "https://www.theodinproject.com/courses/javascript",
    dueDate: dueDate,
    priority: "low"
  })

  projects.project1.board2.createTask({
    name: "And voice coding",
    description: "https://github.com/brxck/voice-coding",
    dueDate: dueDate,
    priority: "low"
  })
}

export default seed
