import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {

  const todoNameElement = useRef();
  const dueDateElement = useRef();



  // const handleAddButtonClicked = () => {
  //   onNewItem(todoName, dueDate);
  //   setDueDate("");
  //   setTodoName("");
  // };
  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`${todoName} due on : ${dueDate}`);
    onNewItem(todoName, dueDate);
    
  };

  return (
    // <div className="container">
    //   <div className="row kg-row">
    //     <div className="col-6">
    //       <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/>
    //     </div>
    //     <div className="col-4">
    //       <input type="date" value={dueDate} onChange={handleDateChange}/>
    //     </div>
    //     <div className="col-2">
    //       <button
    //         type="button"
    //         className="btn btn-success kg-button"
    //         onClick={handleAddButtonClicked}
    //       >
    //         <BiMessageAdd />
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked} className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
