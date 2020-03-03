import React, { useState } from 'react'
import './App.css'

function Todo({ todo, index }) {
  return(
    <div className='todo'>
      { todo.text }
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [ value, setValue ] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return
    addTodo(value)
    setValue('')
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input' 
        value={value}
        placeholder="Add New Todo!" 
        onChange={ e => 
          setValue(e.target.value)
        }
      />
    </form>
  )
}

function App(){
  const [ todos, setTodos ] = useState([
    {
      text: 'Learning about Hooks in React.',
      isCompleted: false
    },
    {
      text: 'Because the Hook Brings you back.',
      isCompleted: false
    },
    {
      text: 'Go back to Neverland.',
      isCompleted: false
    },
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  return(
    <div className='app'>
      <div className='todo-list'>
        { todos.map(( todo, index ) => (
          <Todo key={ index } index={ index } todo={ todo } />
        ))}
          <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}


export default App