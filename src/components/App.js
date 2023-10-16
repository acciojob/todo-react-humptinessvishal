import React, { useState } from "react";
import './../styles/App.css';
// import ToDoList from "./ToDoList"

const App = () => {
  // return (
  //   <div>
  //     {/* Do not remove the main div */}
  //     <ToDoList />
  //   </div>
  // )
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  function addItem() {
    setTodo([...todo, value]);
    setValue("");
  }

  function deleteItem(index) {
    let newTodo = [...todo];
    // newTodo.splice(index, 1);
    setTodo(todo.filter((value, position)=>  position !== index));
    // setTodo(newTodo);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input type="text" onChange={(event) => setValue(event.target.value)} value={value} />
        <button onClick={addItem} >Add Todo</button>
      </div>
      <ul className="todo-container">
        {
          todo.map((item, index) => (
            <li className="value-container">
              <p>{item}</p>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
