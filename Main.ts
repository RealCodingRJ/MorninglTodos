import { TodoTyped } from "./Todos/TodosTypes";
import { isCompleted } from "./Todos/TodosTypes";

let todos: TodoTyped | Array<string> = [];

todos.push("Pill") as unknown as isCompleted;
todos.push("Coffee And Food") as unknown as isCompleted;
todos.push("Shower / Brush Teeth") as unknown as isCompleted;
todos.push("Lunch") as unknown as isCompleted;
todos.push("Laundry") as unknown as isCompleted;
todos.push("Clean Room") as unknown as isCompleted;
if (!isCompleteTodos(todos.toString())) {
  console.log("Not Completed Not Computer");
} else {
  for (let todo in todos) {
    console.log("Step " + todo + " " + todos[todo].toUpperCase());
    console.log();
  }
}
function getArgsTodo(args: any) {
  return args;
}

function isCompleteTodos(a: string, isCompleted?: isCompleted) {
  return isCompleted ? false : true;
}
