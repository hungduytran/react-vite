const TodoData = (props) => {
    const {name, age, data} = props;
    console.log("check props:" , props)
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
          <div>Learing React</div>
          <div>Watchinh Youtube</div>
          <div>
            {JSON.stringify(props.todoList)}
          </div>
      </div>
    )
}

export default TodoData;