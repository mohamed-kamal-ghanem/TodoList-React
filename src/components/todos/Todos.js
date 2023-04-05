import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
  return (
    <div className='todos-list'>


      {props.todos.map(todo =>(
          <Todo todo={todo} key={todo.id} mode={props.mode} toggleTodo={props.toggleTodo} delateTodo={props.delateTodo} editTodo={props.editTodo} />
      ))}
      
      {props.todos.length === 0 && (
        <h2 className='no-todos'> لا يوجد مهام حاليه ... </h2>
      )}
      

    </div>
  )
}

export default Todos
