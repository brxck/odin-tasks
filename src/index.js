import { createTaskList, lists } from "./todo"

lists.list0.createTask({
  name: "Create a task",
  description: "",
  dueDate: "5/5/2019",
  priority: 5
})

console.log(lists)
