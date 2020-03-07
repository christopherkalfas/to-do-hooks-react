import React, { useState } from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import './App.css'

function Todo({ todo, index, completeTodo, removeTodo }) {
  return(
    <div 
      style={ { textDecoration: todo.isCompleted ? 'line-through' : " " } }
      className='todo'>
      { todo.text }
      <div>
        <button onClick={ ()=> completeTodo(index) }>Complete</button>
        <button onClick={ ()=> removeTodo(index) }>X</button>
      </div>
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
      text: 'Laundry',
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

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }


  return(
    <div className='app'>
      <Header />
      <div className='todo-list'>
        { todos.map(( todo, index ) => (
          <Todo 
            key={ index } 
            index={ index } 
            todo={ todo }
            completeTodo={ completeTodo }
            removeTodo={removeTodo}
          />
        ))}
          <div>
            <TodoForm addTodo={addTodo} />
          </div>
      </div>
      <Footer />
    </div>
  )
}


export default App