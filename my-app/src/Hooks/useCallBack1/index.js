/*******The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useMemo in the useMemo chapter. */
// useCallback() is a hook that comes pre-built from react but its not a hook that you are going to use all the time, not going to  use it as often as use effect or state
import { useCallback, useState  } from "react";
import Todos from './todos'
function Index()
{

    let [count, setCount] = useState (0);
    const [todos, setTodos] = useState(["Todos0", "Todos1"]);
    // function to increment 
    const increment = () =>
    {
        count = count + 1;
        setCount(count);
    };
    const AddTodo = useCallback(() => {
        const newTodos = `Todo${todos.length + 1}`;
        setTodos( prevState => [...prevState, newTodos]);
    }, [todos]);
       
       
    
    return ( 
        <div>
                <Todos todos={todos} addTodo={AddTodo}/>
            <div>
                Count : {count}
                <button onClick={increment}>ADD</button>
            </div>
        </div>
    )
}

export default Index;