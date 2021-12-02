import React from 'react'
import { v4 as uuidv4} from 'uuid';

const Header = ({input ,setInput,todos,setTodo}) => {
    const onChangeInput =(e) =>{
        setInput(e.target.value);
    }
    const handleInput =() => {
        setTodo([...todos,{id:uuidv4() , title : input , completed : true}])
        setInput('')
    }
    
    return (
        <>
            <h1 className="header">to do list </h1>
            <input 
            type="text" 
            placeholder="Name..."
            value={input}
            onChange={onChangeInput}
            />
            <button 
            className="add-file" 
            onClick={handleInput}
            >add file
            </button>
        </>
    )
}

export default Header;
