import React,{useState} from "react";
import { useTodo } from "../Context";
function TodoForm() {
    const [taskMsg, settaskMsg] = useState("")
    const {todos,addTask} =useTodo();
    const handleAddTask = (e) =>{
        e.preventDefault();
        addTask({id:Date.now(),task:taskMsg,completed:false})
        settaskMsg("")
    }
    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={taskMsg}
                onChange={e=>settaskMsg(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button 
                type="submit" 
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                onClick={e=>handleAddTask(e)}
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;

