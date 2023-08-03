// use reducer is like useState but you can customise it more and you can add 
import { useReducer } from "react"

const initialState = {backgroundColor : "#fff"}

const reducer = (state, action) =>
{
    switch(action){
        case 'black':
            return {backgroundColor : '#000'}
        case 'red' :
            return {backgroundColor: 'red'}
        default:
            return {backgroundColor: 'initial'}
    }
}

function App()
{
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1 style={{backgroundColor: state.backgroundColor}}>Hello reducer</h1>
            <button onClick={() => dispatch("red")}>Our btn</button>
        </div>
    )
}
export default App