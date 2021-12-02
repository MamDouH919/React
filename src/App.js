import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
const App = ()=> {
  const [input , setInput] = useState([]);
  const [todos,setTodo] = useState([]);
  const [editTodo,seteditTodo] =useState(false);
  const [viewMode,setviewMode] =useState();
  const [editMode,seteditMode] =useState();
  // const viewMode = {display:"none"};
  //   const editMode = {display:"none"}
  return (
    <>
      <div className='cont'>
        <Header
        input={input}
        setInput={setInput}
        todos={todos}
        setTodo={setTodo}
        />
      </div>
      <div className="mylist">
        <TodoList 
        todos={todos}
        setTodo={setTodo}
        editTodo={editTodo}
        seteditTodo={seteditTodo}
        viewMode={viewMode}
        editMode={editMode}
        setviewMode={setviewMode}
        seteditMode={seteditMode}
        />
      </div>
    </>
  );
}

export default App;
