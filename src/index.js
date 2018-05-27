"use strict"

import { createProject, deleteProject, projects } from "./todo"
import { renderMenu, renderProjects, renderBoards } from "./render"
import "./index.scss"
import seed from "./seed"
import "./icons"

seed(projects)

renderMenu(projects)
renderBoards(projects.project0)
