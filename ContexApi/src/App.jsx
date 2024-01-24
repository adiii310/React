import React,{useEffect, useState} from 'react'
import { TodoProvider } from './Context'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data && data.length > 0) {
      setTodos(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask=(todo)=>{
    setTodos(prev => [{...todo},...prev])
  }
  const updateTask= (id,todo)=>{
    setTodos((prev)=>prev.map(item=> item.id === id ? {...item,task: todo} : item))
  }
  const deleteTask =(id)=>{
    setTodos(prev=>prev.filter(item=>item.id !== id))
  }

  const toggleComplete= (id)=>{
    setTodos(prev=>prev.map(item=> item.id === id ?{...item,completed: !item.completed} : item))
  }

  return (
    <TodoProvider value={{todos,addTask,deleteTask,updateTask,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map(item=>(
              <div key={item.id } className='w-full'>
                <TodoItem todo={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
