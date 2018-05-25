"use strict"

import { createProject, deleteProject, projects } from "./todo"
import { renderMenu, renderProjects } from "./menu"
import renderBoards from "./boards"
import "./index.scss"

console.log(projects)

projects.project0.createBoard("Get started")
projects.project0.createBoard("Hello world")
projects.project0.createBoard("Top of morning")

projects.project0.board0.createTask({
  name: "Create a task",
  description: "It's easy!",
  dueDate: "5/5/2019",
  priority: 0
})

projects.project0.board0.createTask({
  name: "Create another task",
  description: "It's easy!",
  dueDate: "5/5/2019",
  priority: 1
})

projects.project0.board0.createTask({
  name: "Create one more task",
  description: "It's easy!",
  dueDate: "5/5/2019",
  priority: 2
})

projects.project0.board0.createTask({
  name: "I believe in you",
  description: "It's easy!",
  dueDate: "5/5/2019",
  priority: 3
})

renderMenu()
renderProjects(projects)
renderBoards(projects.project0)
