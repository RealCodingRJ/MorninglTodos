import { TodoTyped } from "./Todos/TodosTypes";
import { isCompleted } from "./Todos/TodosTypes";

let todosOne: isCompleted = {
  isCompleted: true,
};

const todos: string[] = [];

todos.push("Pill");
todos.push("Coffee And Food");
todos.push("Shower / Brush Teeth");
todos.push("Lunch");
todos.push("Laundry");
todos.push("Clean Room");

if (!todosOne.isCompleted) {
  console.log("Not Completed Not Computer");
} else {
  todos.forEach((todo) => {
    console.log("Step " + todo.toUpperCase());
    console.log();
  });
}
