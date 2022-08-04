import React from 'react'
import Todositems  from './todositems'
export default function Todos(props) {
  return (
    
    <section className='todo-section'>
      <h1 className='todo-secheading'>Todoslist</h1>
      <div className='todo-list-container'>
        {props.todos.length ===0? "add what you want to do":
          props.todos.map((todo) => {
            return    < Todositems key={todo.sno} todo = {todo} onDelete = {props.onDelete}/>
              })
              }
      
        
        </div>
    
        </section>
  )
}
