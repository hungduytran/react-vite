import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';

const App = () => {

  const hoidanit = "MU";
  const age = 25;
  const data ="hanoi";
  const country = "vietnam";
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
      name={hoidanit}
      age={age}
      data={data}
      country={country}
      />
      <div className='todo-image logo'>
        <img src={reactLogo} alt="React Logo" />
      </div>
    </div>
  )
}

export default App;
