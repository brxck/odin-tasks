const seed = projects => {
  const odinTasks = projects.createProject("OdinTasks")
  odinTasks.createBoard("Let's get started")
  odinTasks.createBoard("This is a board")

  const about = projects.createProject("About")
  about.createBoard("brxck")
  about.createBoard("This is a project for")
  about.createBoard("Made using:")

  const dueDate = Date.now() + 1000 * 60 * 60 * 24

  odinTasks.boards[0].createTask({
    name: "Create a task",
    description: "Press the board's plus button.",
    dueDate: dueDate,
    priority: "low"
  })

  odinTasks.boards[0].createTask({
    name: "Create a board",
    description: "In the menu to the left.",
    dueDate: dueDate,
    priority: "medium"
  })

  odinTasks.boards[0].createTask({
    name: "Create a project",
    description: "Also in the menu to the left.",
    dueDate: dueDate,
    priority: "high"
  })

  odinTasks.boards[0].createTask({
    name: "You can do it",
    description: "Just click text to edit it! Try on names and descriptions.",
    dueDate: dueDate,
    priority: "urgent"
  })

  odinTasks.boards[1]
    .createTask({
      name: "Click tasks for details",
      dueDate: dueDate,
      priority: "low"
    })
    .toggleCompleted()

  odinTasks.boards[1].createTask({
    name: "Tasks can have descriptions",
    description: "Like this one! Click me to edit.",
    dueDate: dueDate,
    priority: "low"
  })

  odinTasks.boards[1].createTask({
    name: "And different priorities",
    description: "Click the tag below to toggle priority.",
    dueDate: dueDate,
    priority: "low"
  })

  odinTasks.boards[1].createTask({
    name: "And due dates",
    description: "Click the due date tag to edit.",
    dueDate: dueDate,
    priority: "low"
  })

  about.boards[0].createTask({
    name: "My personal website",
    description: "http://brockmcelroy.com",
    dueDate: dueDate,
    priority: "medium"
  })

  about.boards[0].createTask({
    name: "This project on GitHub",
    description: "https://github.com/brxck/odin-tasks",
    dueDate: dueDate,
    priority: "high"
  })

  about.boards[1].createTask({
    name: "The Odin Project",
    description: "https://www.theodinproject.com/",
    dueDate: dueDate,
    priority: "low"
  })

  about.boards[1].createTask({
    name: "JavaScript course",
    description: "https://www.theodinproject.com/courses/javascript/lessons/todo-list",
    dueDate: dueDate,
    priority: "low"
  })

  about.boards[2].createTask({
    name: "webpack",
    description: "https://webpack.js.org/",
    dueDate: dueDate,
    priority: "low"
  })

  about.boards[2].createTask({
    name: "Pug",
    description: "https://pugjs.org",
    dueDate: dueDate,
    priority: "low"
  })

  about.boards[2].createTask({
    name: "Bulma",
    description: "https://bulma.io/",
    dueDate: dueDate,
    priority: "low"
  })

  about.boards[2].createTask({
    name: "Font Awesome Icons",
    description: "https://fontawesome.com/",
    dueDate: dueDate,
    priority: "low"
  })

  about.boards[2].createTask({
    name: "json-dry",
    description: "(But it only works sometimes...)\nhttps://github.com/skerit/json-dry",
    dueDate: dueDate,
    priority: "low"
  })

  about.boards[2].createTask({
    name: "date-fns",
    description: "https://date-fns.org/",
    dueDate: dueDate,
    priority: "low"
  })

  about.boards[2].createTask({
    name: "(Too much) vanilla JavaScript",
    description: "https://www.theodinproject.com/courses/javascript",
    dueDate: dueDate,
    priority: "low"
  })

  about.boards[2].createTask({
    name: "And voice coding!",
    description: "https://github.com/brxck/voice-coding",
    dueDate: dueDate,
    priority: "low"
  })
}

export default seed
