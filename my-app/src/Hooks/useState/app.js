import {useState } from "react";


function App()
{

    /****useState is a hook that gives you the ability to re-render component and react
     * count is the variable that will be updated  ** */
    const [count, setCount] = useState(0);

    // function changevalue()
    // {
    //     setCount((prevCounter) => prevCounter + 1);
    //     // here the prevCounter will be 1
    //     setCount((prevCounter) => prevCounter + 1);
    //     // here the prevCounter will be 2
    //     setCount((prevCounter) => prevCounter + 1);
    // }
    return (
        <div>
            {count}
            <button onClick={function(){
                setCount(count + 1)
            }}>Increment count</button>
        </div>
    )

}

export default App;
