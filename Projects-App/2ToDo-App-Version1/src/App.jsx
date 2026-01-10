import AppName from "./component/AppName.jsx";
import AddTodo from "./component/AddTodo.jsx";
import TodoItems from "./component/TodoItems.jsx";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2025",
    },
    {
      name: "Buy Vegetable",
      dueDate: "4/10/2025",
    },
    {
      name: "Buy Books",
      dueDate: "4/10/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
