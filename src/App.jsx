import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    {id: 1, name: "Learing React"},
    {id: 1, name: "Watching Youtube"}
  ])

  const hoidanit = "MU";
  const age = 25;
  const data ="hanoi";
  const country = "vietnam";

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
      name={hoidanit}
      age={age}
      data={data}
      todoList={todoList}
      />
      <div className='todo-image logo'>
        <img src={reactLogo} alt="React Logo" />
      </div>
    </div>
  )
}

export default App;
