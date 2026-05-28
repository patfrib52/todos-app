import "./styles.css";
import { requestTask, getTodos } from "./todo.js";
import { display, createTitle } from "./ui.js";

createTitle("welcome to My Todo's");
requestTask();
display();
console.log(getTodos());
