
import React,{useState} from "react";
import './../styles/App.css';


const App = () => {

  const [value , setvalue] = useState("")
  const [todo , settodo] = useState([])

  function addTodo () {
    settodo([...todo , value])                        //todo.push(value)
    setvalue("")
  }

  function deleteTodo(index) {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    settodo(newTodo);
  }

    

  return (
    <div>
        {/* Do not remove the main div */}
        <h3>To-do list</h3>

        <input value={value} onChange={(e)=>(setvalue(e.target.value))} type="text"/>

        <button onClick={addTodo}>Add To-Do</button>
     
       {
        todo[0] != "undefind" && 
        <ul>
          {
            todo.map((value,index)=>{
              return(
                <li>{value}<button  onClick={() => deleteTodo(index)}>Delete</button></li>
              )
             })
          }
           
        </ul>
       }

    </div>
  )
}

export default App
