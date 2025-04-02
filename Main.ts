import { TodoTyped } from "./Todos/TodosTypes";

const todos: TodoTyped | Array<string> = [];

todos.push("Pill");
todos.push("Coffee And Food");
todos.push("Shower / Brush Teeth");
todos.push("Lunch");
todos.push("Laundry");
todos.push("Clean Room");

for (let todo in todos) {
  console.log("Step " + todo + " " + todos[todo].toUpperCase());
}

function getArgsTodo(args: any) {
  return args;
}
