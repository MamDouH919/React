import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
const App = ()=> {
  const [input , setInput] = useState([]);
  const [todos,setTodo] = useState([]);
  const [editTodo , seteditTodo] = useState([]);


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

        />
      </div>
    </>
  );
}

export default App;
