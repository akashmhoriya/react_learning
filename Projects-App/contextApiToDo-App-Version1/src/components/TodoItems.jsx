
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext);
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((items,index) =><TodoItem key={index} todoDate={items.dueDate} todoName={items.name}></TodoItem>)}
      
    </div>
  );
};

export default TodoItems;
