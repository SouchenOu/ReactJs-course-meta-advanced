//useMemo() allows us to cash a value we are essentially stopping it from re-rendering everytime
// a component  re-renders it essentially saves the value and it is going to reference it after the next re-render 

import { useState} from "react";

function App()
{
    const [count, setCount] = useState(0);
    const expensiveCalculation = () => {
        return [count , count + 1];
    }

    // const renderedValue = useMemo(function(){
    //    return  expensiveCalculation();
    // }, [count])
    // const renderedValue = useMemo(() => expensiveCalculation(), [])
    function increment(event)
    {
        setCount((prevCount) => prevCount + 1);
        event = event.target.value;
    }
    return (
        <div>
            <p value={count} onClick={increment}>Count: {count}</p>
            <p>Rendered value: {expensiveCalculation}</p>
        </div>
    )
}
export default App;