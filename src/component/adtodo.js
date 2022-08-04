import { useState } from "react";

import React from 'react'

export default function AdTodo({addTodo}) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
 const submit = (e) => {
    e.preventDefault();
if(!title || !desc){
    alert('fields can not be empty');
}
else{
 addTodo(title,desc);
 setDesc('');
 setTitle('');
}
 }
  return (
      <div className="add-form-cont">
        <form onSubmit={submit}>
            <label htmlFor="title">add title</label><br />
            <input type="text" name="title" id="title" value={title} onChange = {e=>{setTitle(e.target.value)}} /><br /><br />
            <label htmlFor="desc">description</label><br />
            <input type="text" name="desc" id="desc" value={desc}  onChange = {e=>{setDesc(e.target.value)}} /><br /><br />
            <button className="submit"> Add work</button>
        </form>
      </div>
  )
}
