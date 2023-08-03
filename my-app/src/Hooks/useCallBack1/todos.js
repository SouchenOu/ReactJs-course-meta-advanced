function Todos({todos, addTodos})
{
    let result = todos.map(function(elem){
        return <p>{elem}</p>
    })
    return (
        <div>
            <h2>My todo list</h2>
            {result}
            <button onClick={addTodos}>Add todos</button>
        </div>
    )
}

export default Todos;