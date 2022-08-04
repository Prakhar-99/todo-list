
import './App.css';
import Header from './component/header';
import Todos from './component/todos';
import Fotter from './component/fotter';
import AdTodo from './component/adtodo';
import React, { useState, useEffect} from 'react'
function App() {
const  onDelete = (todo) => {
  setTodos(todos.filter( e => {
   return e!==todo;
  }))
  localStorage.setItem("todos", JSON.stringify(todos));
}
 let initTodo ;
 if(localStorage.getItem('todos')===null){
   initTodo = [];
 }
 else{
  initTodo = JSON.parse(localStorage.getItem('todos'));
 }
const [todos, setTodos] = useState(initTodo);
useEffect(() =>{
  localStorage.setItem("todos", JSON.stringify(todos));
},[todos]);
 const addTodo = (title,desc) => {
  let sno ;
  if(sno === null){
    sno = 1;
  }
  else{
    sno = todos.length + 1;
  }
   const newTodo = {
    sno: sno,
    title: title,
    desc:desc
   }
   setTodos([...todos,newTodo]);
 }
 return (
    <div className="App">
      <Header />
      <AdTodo addTodo ={addTodo} />
     <Todos todos={todos} onDelete = {onDelete} />
     <Fotter />
    </div>
  );
}

export default App;
