import AppName from "./component/AppName.jsx";
import AddTodo from "./component/AddTodo.jsx";
import TodoItems from "./component/TodoItems.jsx";
import WelcomeMessage from "./component/WelcomeMessage.jsx";
import "./App.css";
import { useState } from "react";
function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2025",
  //   },
  //   {
  //     name: "Buy Vegetable",
  //     dueDate: "4/10/2025",
  //   },
  //   {
  //     name: "Buy Books",
  //     dueDate: "4/10/2025",
  //   },
  // ];

  // const [todoItems, setTodoItems] = useState(intialTodoItems);
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    // const newTodoItems = [
    //   ...todoItems,
    //   { name: itemName, dueDate: itemDueDate },
    // ];
    // setTodoItems((currVlaue) => {
    //   const newTodoItems = [
    //     ...currVlaue,
    //     { name: itemName, dueDate: itemDueDate },
    //   ];
    //   return newTodoItems;
    // });
    setTodoItems((currVlaue) => [
      ...currVlaue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Deleted:${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
