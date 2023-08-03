import { useState , useEffect } from "react";

/******useEffect(<function>, <dependency>)  */


/*****When the dependency list is not present, react will have nothing to compare the previous value with; as a result, the effect will run every time. */
function App()
{
    const [input, setInput] = useState("")
    const [counter, setCounter] = useState(0)
    /* befaure use Effect this code (console.log("hello souchen") keep running all the time ;)
    / console.log("hello souchen");*/

    /***But when i use useEffect the message will display just at the first time i reload*/
    /****** the useEffect will now only be evoked once per render  */
    // useEffect(() => {
    //     window.alert("Hello souchen");
    // },[]) 
    /*****  HERE UseEffect() is gonna  run again and again when counter gets changed , if counter doesnt change useEffect() run just one time at the begginnig */
    //The effect will only run again if at least one of the values specified in the effect's dependencies has changed since the last rendering cycle. 
    // useEffect(() => {
    //     const incrementer = setInterval(() => {
    //         setCounter((prevCounter) => prevCounter + 1)
    //     }, 1000)
    //     return () => clearInterval(incrementer)
    // }, [counter])
    useEffect(()=> {
        function test()
        {
            if(counter === 0)
            {
                setCounter(Math.random() * 200)
            }
        }
        test();
    }, [counter])

    // useEffect(() => { 
    //     // Update the document title using the browser API    
    //     window.alert("You clicked  times");  
    //     }); 
    const increment = () =>
    {
        setCounter(counter + 1);
    }
    return (
        <div>
            <h2>{input}</h2>
            <h2>{counter}</h2>
            <h1 onClick={increment}>Use Effect</h1>

            <input onChange={(event) => setInput(event.target.value)} type="text"/>


        </div>
    )
}
export default App;