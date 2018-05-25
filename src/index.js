import { createProject, deleteProject, projects } from "./todo"
import { renderMenu, renderProjects } from "./render"
import "./index.scss"

projects.project0.createTask({
  name: "Create a task",
  description: "",
  dueDate: "5/5/2019",
  priority: 5
})

renderMenu()
renderProjects(projects)

console.log(projects)
