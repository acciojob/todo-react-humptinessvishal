import React,{useState} from "react";

const ToDoList = () => {

    const [value,setValue]=useState("");
    const [todo,setTodo]=useState([]);
    
    function addItem()
    {
        setTodo([...todo,value]);
    }
    
    function deleteItem(index)
    {
        let newTodo=[...todo];
        newTodo.splice(index,1);
        setTodo(newTodo);
    }
    

    return (
        <div>
            <h1>To-Do List</h1>
            <input type="text" onChange={(event)=> setValue(event.target.value)}/>
            <button onClick={addItem} >Add Todo</button>
            <ul className="todo-container">
                {
                todo.map((item,index) => (
                        <li>
                            <p>{item}</p>
                            <button onClick={()=>deleteItem(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ToDoList;