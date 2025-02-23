const TodoData = (props) => {

    const {todoList, deleteTodo} = props;

    const handelClick = (id) => {
        deleteTodo(id)
    }

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log(item, index)
                 return (<div className={`todo-item`} key={item.id}>
                            <div>{item.name}</div>
                            <button
                            onClick={() =>handelClick(item.id)}
                            style={{cursor: "pointer"}}>Delete</button>
                        </div>);
            })}

      </div>
    )
}

export default TodoData;