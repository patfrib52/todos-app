if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export { saveTodos, loadTodos };
