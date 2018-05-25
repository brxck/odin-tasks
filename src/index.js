import { createProject, deleteProject, projects } from "./todo"
import { renderMenu, renderProjects } from "./render"
import "./index.scss"

console.log(projects)

projects.project0.createBoard("Welcome")

projects.project0.board0.createTask({
  name: "Create a task",
  description: "It's easy!",
  dueDate: "5/5/2019",
  priority: 5
})

renderMenu()
renderProjects(projects)

