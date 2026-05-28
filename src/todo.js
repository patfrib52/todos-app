import { saveTodos, loadTodos } from "./storage.js";

const todos = loadTodos();

function requestTask() {
  const task1 = prompt("whats next1");
  todos.push(task1);
  saveTodos(todos);
}

const getTodos = () => todos;
export { requestTask, getTodos };
