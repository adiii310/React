import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:Date.now(),
            task:"this is my task",
            completed: false
        },
    ],
    addTask : (todo)=>{},
    updateTask :(id,todo)=>{},
    deleteTask : (id)=>{},
    toggleComplete :(id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;