import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

const TodoList = ({todos , setTodo ,editTodo,seteditTodo,
    viewMode,editMode ,setviewMode
    ,seteditMode}) => {
    
    const HandleDel =({id}) =>{
        setTodo(todos.filter((todo)=> todo.id !== id))
    }
    const HandleEdit =(todo) =>{
        setTodo(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return{...item,completed:!item.completed};
                }
                return item;
            })
        )
        if(!todo.completed){
            console.log("mv,m");
        
        }
        // let findTdo = todos.find((todo)=> todo.id === id);
        // seteditTodo(findTdo);
    // if (editTodo) {
    //     setviewMode('inline-block')
    //     seteditMode('none')
    //         } 
    //     else
    //     {
        
    // }
    }
        return (
            <>
            {todos.map((todo) => (
                <div className="target" key={todo.id}>
                    <input type="text"  style={viewMode} value={todo.title}/> 
                    <span  className='text' style={{display:editMode}} >{todo.title}</span> 
                    <span className='close' 
                    onClick={()=>HandleDel(todo)}
                    ><AiOutlineCloseCircle /></span>
                    <span className="edit"
                    onClick={()=>HandleEdit(todo)}
                    > <BiEdit /> </span>
                    <span className="save"><AiOutlineCheckCircle/></span>
                </div>
            ))}
            </>
        )
}
export default TodoList;