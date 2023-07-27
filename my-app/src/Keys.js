
import {useState} from "react"
/*****We will show :**** */

/********
 * 
 * 1:*How to use keys to identify and distinguish between list elements 
 * 
 * 2: How to Dermine the appropriate key
 * 
 * 3: Understand the implications of using keys incorrectly
 * 
 * 
 * 
 * */

/*****Example */
// eslint-disable-next-line no-lone-blocks
{/* <ul>
    <li key="beer">Beer</li>
    <li key="wine">Wine</li>
</ul>
<ul>
    <li key="cider">Cider</li>
    <li key="beer">Beer</li>
    <li key="wine">Wine</li>
</ul> */}


/******What are keys:   keys are identifiers that help react to determine which items have changed, are added or are removed.
 * 
 * They also instruct how to treat a specific element when an update accurs and whether its internal state should be preserved or not 
 * to illustrate adding a key to the last example can make the tree conversion efficient that is 
 * because react now knows that the element with the key cider is the new one and the elements with the
 * keys beer and wine have just moved 
 * 
 * 
 * The key used most often is a unique ID that comes from your data ,those IDs typically mirror a database ID which
 * is an ID given to an item in a database 
  */


/********Using keys within list components */




function ToDo(props)
{
    return (

        <div>
            <tr>
                <td>
                    <label> {props.id}</label>
                </td>
                <td>
                    <input />
                </td>
                <td>
                    <label>{props.createdAt}</label>
                </td>
                
            </tr>
        </div>
    )
    
}

function Keys()
{
    // let [todos, setTodos] = React.useState(["thing1", "thing2"]);
    // function AddThing ()
    // {
    //     const add = `thing${todos.length + 1 }`;
    //     // todos.push(add);
    //     setTodos(prevState => [...prevState, add]);
    // }
    // const result = todos.map(function(elem){
    //     return <p>{elem}</p>
    // })

    
    // return (
        
    //     <div>
    //         <button onClick={AddThing}>Add</button>
    //         {result}
            

    //     </div>
    // )       
    const [todos, setTodos] = useState([{
        id: 'todo1',
        createdAt: '18:04',
    },
    {
        id: 'todo2',
        createdAt: '20:30',
    }]);

    const reverseOrder = () => {
        setTodos([...todos].reverse());
    }

    return (
        <div>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map(function(todo, index){
                        return <ToDo Key={index} id={todo.id} createdAt={todo.createdAt}/>
                    })}
                </tbody>
            </table>
        </div>
    )

}


export default Keys;



