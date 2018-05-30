"use strict"

import { projects } from "./todo"
import { renderMenu, renderProject } from "./render"
import "./index.scss"
import seed from "./seed"
import "./icons"

seed(projects)

console.log(projects)

renderMenu()
renderProject("project0")
