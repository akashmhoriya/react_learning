import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store.jsx";
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

  const addNewItem = (itemName, itemDueDate) => {
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

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Deleted:${todoItemName}`);
  };

  // const defaultValue = [{name:"akash", dueDate:"today"}];

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
      // value={{
      //   todoItems: todoItems,
      //   addNewItem: addNewItem,
      //   deleteItem: deleteItem,
      // }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
