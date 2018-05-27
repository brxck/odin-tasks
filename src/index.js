"use strict"

import { projects } from "./todo"
import { renderMenu, renderBoards } from "./render"
import "./index.scss"
import seed from "./seed"
import "./icons"

seed(projects)

renderMenu(projects)
renderBoards(projects.project0)
