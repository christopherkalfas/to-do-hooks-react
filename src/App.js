import React, { useState } from 'react'

function Todo({ todo, index }) {
  return(
    <div className='todo'>
      { todo.text }
    </div>
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

  return(
    <div className='app'>
      <div className='todo-list'>
        { todos.map(( todo, index ) => (
          <Todo key={ index } index={ index } todo={ todo } />
        ))}
      </div>
    </div>
  )
}


export default App