"use strict"

import { createProject, deleteProject, projects } from "./todo"
import { renderMenu, renderProjects } from "./menu"
import { renderBoards } from "./boards"
import "./index.scss"
import seed from "./seed"
import "./icons"

seed(projects)

console.log(projects)

renderMenu()
renderProjects(projects)
renderBoards(projects.project0)
