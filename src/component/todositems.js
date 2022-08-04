import React from 'react'

export default function Todositems({todo , onDelete}) {
  return (
    <div className='todo-card'>
     <h5>{todo.sno}</h5>
    <h3 className='card-title'> {todo.title} </h3>
    <p className='card-disc'> {todo.desc} </p>
    <button className='delete-btn' onClick={() => {onDelete(todo)}}>delete</button>
    
      </div>
  )
}
