import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  // const handleAddButtonClicked = () => {
  //   onNewItem(todoName, dueDate);
  //   setDueDate("");
  //   setTodoName("");
  // };
  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
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
    <div className="container">
      <form action="" onSubmit={handleAddButtonClicked}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
          <div className="col-2">
            <button
            
              className="btn btn-success kg-button"
            >
              <BiMessageAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
