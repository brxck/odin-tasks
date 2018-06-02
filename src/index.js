"use strict"

import projects from "./todo"
import { renderMenu, renderProject } from "./render"
import "./index.scss"
import "./icons"
import seed from "./seed"

seed()

// if (projects.list.length === 0) {
//   console.log("seeding projects", projects)
//   seed()
// }

renderMenu()
renderProject("project0")
