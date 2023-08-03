import {useCallback, useState} from 'react'
import List from './list'

function Index()
{
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    /*getItems is a function each time our component gets rendered which means every single time it is going to be different 
    event if the actual number itself didnt change, and this is why we want to use callBack() hook .
    Using callback() is just like using memo() it is not going to Rerended the codeinside of it unless certain parameters change and that means that every single time that  
    we call our App component this get items function is only going to update when it actually needs to (for example when numbers change)     */


    /****The difference between memo() and useCallback() is the memo() takes a function and it is going to return to you the return value 
     * of that function but useCallback() is different, it takes a function 
      */
    const getItems = useCallback(() => {
            return [number, number + 1, number + 2]
    }, [number] )

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }
    return (
        <div style={theme}>
            <input
                type='number' value={number} onChange={event => setNumber(parseInt(event.target.value))}>
            </input>
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle theme</button>
            <List getItems={getItems}/>

        </div>
    )
}

export default Index;