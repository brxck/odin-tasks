"use strict"

import projects from "./todo"
import { renderMenu, renderProject } from "./render"
import "./index.scss"
import "./icons"
console.log(projects)
renderMenu()
renderProject("project0")
