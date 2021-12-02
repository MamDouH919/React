import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

const TodoList = ({todos , setTodo,editTodo ,seteditTodo}) => {
    const updateTodo = (title,id,test)=>{
        if(test!==title){
        let newTodo= todos.map((todo)=>
            todo.id === id ? {title,id,completed:true} : todo
        )
        setTodo(newTodo);
    }
    if(!title.length || test===title){
        setTodo(
            todos.map((item)=>{
                if(item.id === id){
                    return{...item,completed:!item.completed};
                }
                return item;
            })
        )
    }
    }
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
    }
    const Handlesave =({id}) =>{
        let findTodo = todos.find((todo)=> todo.id === id)
        seteditTodo(findTodo)
        // console.log(findTodo);
        
        if(!findTodo.completed){
            updateTodo(editTodo , findTodo.id ,findTodo)
        }
        
    }
    const onChangeInput =(e) =>{
        seteditTodo(e.target.value);
    }

    return (
        <>
        {todos.map((todo) => (
            <div className="target" key={todo.id}>
                { !todo.completed ? 
                <input type="text" defaultValue={todo.title} onChange={onChangeInput}/> 
                : <span  className='text'  >{todo.title}</span> }
                <span className='close' 
                onClick={()=>HandleDel(todo)}
                ><AiOutlineCloseCircle /></span>
                <span className="edit"
                onClick={()=>HandleEdit(todo)}
                > <BiEdit /> </span>
                <span className="save"
                onClick={()=>Handlesave(todo)}
                ><AiOutlineCheckCircle/></span>
            </div>
        ))}
        </>
    )
}
export default TodoList; 