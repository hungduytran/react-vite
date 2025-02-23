const TodoNew = (props) => {
  console.log(props)
  const {addNewTodo} = props;
  // addNewTodo("eric")
    return (
        <div className='todo-new'>
        <input type="text" />
        <button>ADD</button>
      </div>
    )
}

export default TodoNew;