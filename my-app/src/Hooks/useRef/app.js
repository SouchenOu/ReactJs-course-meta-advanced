//useRef 

// in react how can i get the height on an element by using useRef


import { useEffect, useRef } from "react"
function App()
{
    const titleRef = useRef()
    useEffect(() =>{
        console.log(titleRef.current.offsetHeight)
    }, [])
    return (
        <div>
            {/* to focus on this element we use useRef */}
            <h1 ref={titleRef}>Hello souchen</h1> 
        </div>
    )
}

export default App;