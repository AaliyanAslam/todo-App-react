// import React, { useState } from "react"

// import "./App.css"
// const App =() => {
//   const [title , setTitle ] = useState("")
//   const [description , setDescription] = useState("")
//   const [todo , setTodo] = useState([])

//   const addTodo = (event)=> {
//    event.preventDefault();
//    console.log(title);
//    console.log(description);

//   todo.push({title , description , id : Date.now()})
//   setTodo([...todo])

//   setTitle("")
//   setDescription("")
//   }
// if(setTitle === "" && setDescription === ""){
//   alert("enter something")
// }
//   const deleteTodo= (index)=> {
//     todo.splice(index,1)
//     setTodo([...todo])
//   }

//   const editTodo = (i)=> {

//     console.log("todo added" , i);

//   const updatedVal = prompt("enter title");
//   if(updatedVal === ""){
//     alert("updated value is empty")
//     return
//   } else{

//     todo[i].title = updatedVal;
//     setTodo([...todo])

//   }

//   }

// return(
//   <>

//   <div>
//   <form onSubmit={addTodo}>
//  <input type="text" onChange={(e)=> {setTitle(e.target.value)}} value={title} className="border border-black" placeholder="Enter Title"/>
//  <br /><br />
//  <input type="text" onChange={(e)=> {setDescription(e.target.value)}} value={description} className="border border-black" placeholder="Enter Description"/>
//  <br />
//  <br />
//  <button type="submit">Add Todo</button>
//   </form>

// <div>{
//  todo.length > 0 ?  todo.map((item , index) => {
//   return  <div className="border border-black m-3.5 text-center" key={item.id}>
//         <p>{item.title}</p>
//         <p>{item.description}</p>
//         <button className="border mx-2" onClick={()=> {deleteTodo(index)}} >Delete Todo</button>
//         <button className="border mx-2" onClick={()=> {editTodo(index)}} >Edit Todo</button>
//       </div>

//     }) : <span className="text-3xl text-center">No Todos Found : 404</span>

//   }</div>

//   </div>

//   </>
// )

// }

// export default App

import React from "react";
import { useState } from "react";
import { MdDelete  } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

import "./App.css"

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(description);
    todo.push({ title, description , id: Date.now()});
    setTodo([...todo]);

    setTitle([])
    setDescription([])
  };
  const deleteTodo= (index)=> {
        todo.splice(index,1)
        setTodo([...todo])
      }
    
      const editTodo = (i)=> {
    
        console.log("todo added" , i);
    
      const updatedVal = prompt("enter title");
      if(updatedVal === ""){
        alert("updated value is empty")
        return
      } else{
    
        todo[i].title = updatedVal;
        setTodo([...todo])
    
      }
    
      }


  return (
    <>
<div className="container gap-5 rounded flex flex-col w-150 max-w-600 p-4">
  <header className="text-center flex flex-col items-center mb-4">
    <h1 className="text-4xl font-bold text-purple-600 flex items-center">
      ✨ My Tasks
    </h1>
    <p className="text-gray-500 mb-4 text-xl">Let's be productive today!</p>
  </header>

  <div className="p-2">
    <form onSubmit={addTodo} className="bg-white w-120 rounded-lg  p-4 flex gap-4">
      <div className="flex flex-col gap-4"> 
        <input
          type="text" autoComplete="off" required id="tit"
          className="border rounded-lg p-2 w-100 h-12 mt-6"
          placeholder="Task title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <input
          type="text" autoComplete="off" id="des"
          className="border rounded-lg w-100 h-12"
          placeholder="Task description (optional)"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      <div className="btn-div">
      <button
        type="submit"
        className="bg-purple-500 text-white w-15 hover:translate-y-[-2px] transition duration-300 rounded-lg h-28 float-right relative right-bottom-28"
      >
       <span className="text-3xl">
       +
        </span>
      </button>
      </div>
    </form>
  </div>

  <div className="mt-6 flex flex-col-reverse ">
    {todo.length > 0 ? (
      todo.map((item , index) => (
        <div key={item.id} className="flex flex-col-reverse ">
        <div className="h-2"></div>
        <div className="todo-item rounded-lg hover:border-purple-500 transition hover:translate-x-2  duration-300 flex justify-between items-center border border-gray-200 overflow-auto">
          <div className="rounded-lg ">
            <p className="font-medium first-letter:capitalize">{item.title}</p>
            <p className="text-gray-500">{item.description}</p>
          </div>
          <div className="flex">
            <MdDelete className="hover:text-red-600 hover: hover:drop-shadow-2xl-red-500 transition duration-200 cursor-pointer p-1 text-2xl" onClick={() => deleteTodo(index)} />
            <CiEdit className="hover:text-blue-600 hover: hover:drop-shadow-blue-500 transition duration-200 cursor-pointer p-1 text-2xl" onClick={() => editTodo(index)} />
          </div>
        </div>
      </div>
      
        
      ))
    ) : (
      <div className="text-gray-500 text-center"><span className="text-2xl">No todo found : 404</span> </div>
    )}
  </div>
</div>


    </>
  );
};

export default App;
