"use strict"

import { createProject, deleteProject, projects } from "./todo"
import { renderMenu, renderProjects } from "./menu"
import "./index.scss"

console.log(projects)

projects.project0.createBoard("Get started")

// projects.project0.board0.createTask({
//   name: "Create a task",
//   description: "It's easy!",
//   dueDate: "5/5/2019",
//   priority: 5
// })

renderMenu()
renderProjects(projects)

