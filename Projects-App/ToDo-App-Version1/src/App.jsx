import AppName from "./component/AppName.jsx";
import AddTodo from "./component/AddTodo.jsx";
import TodoItem from "./component/TodoItem.jsx";
import TodoItem2 from "./component/TodoItem2.jsx";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
