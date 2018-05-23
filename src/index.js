import { createProject, deleteProject, projects } from "./todo"

projects.project0.createTask({
  name: "Create a task",
  description: "",
  dueDate: "5/5/2019",
  priority: 5
})

console.log(projects)
