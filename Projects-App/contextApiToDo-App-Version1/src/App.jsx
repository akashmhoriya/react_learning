import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store.jsx";


// const todoItemsReducer = (currTodoItems, action)=>{
//   let newTodoItems = currTodoItems;
//   if (action.type === 'NEW_ITEM'){
//     newTodoItems = [
//       ...currTodoItems,{name:action.payload.itemName, dueDate:action.payload.itemDueDate},
//     ];
//   }
//   else if(action.type === 'DELETE_ITEM'){
//     newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);
//   }

//   return newTodoItems;
// }

function App() {
  
  // const [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[]);
  // const addNewItem = (itemName, itemDueDate) => {
  //   const newItemAction = {
  //     type: "NEW_ITEM",
  //     payload: {
  //       itemName,
  //       itemDueDate
  //     }
  //   };
  //   dispatchTodoItems(newItemAction);
    
  //   // setTodoItems((currVlaue) => [
  //   //   ...currVlaue,
  //   //   { name: itemName, dueDate: itemDueDate },
  //   // ]);
  // };

  // const deleteItem = (todoItemName) => {
  //   // const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
  //   // setTodoItems(newTodoItems);
  //   // console.log(`Item Deleted:${todoItemName}`);

  //   const deleteItemAction = {
  //     type: "DELETE_ITEM",
  //     payload: {
  //       itemName:todoItemName,
  //     }
  //   };
  //   dispatchTodoItems(deleteItemAction);
  // };

  // // const defaultValue = [{name:"akash", dueDate:"today"}];

  return (
    // <TodoItemsContext.Provider
    //   value={{
    //     todoItems,
    //     addNewItem,
    //     deleteItem,
    //   }}
    //   // value={{
    //   //   todoItems: todoItems,
    //   //   addNewItem: addNewItem,
    //   //   deleteItem: deleteItem,
    //   // }}
    // >
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
