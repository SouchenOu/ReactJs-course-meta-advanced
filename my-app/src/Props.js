/****Props and state**** */

/*****
 * Props and state are both plain JavaScript or JS objects the react uses to hold information as 
 * 
 * So we will discover the differences and similarities between props and state in React 
 * 
 * you will also learn how to identify whether something falls into props or state
 * 
 * 
 * Identify when state is needed
 * 
 * 
 * Differentiate between different React components based on props and state
 */


/******The difference between Props and State----> */

/*********Props:  get passed to the component like parameters in a function where state 
 * is manages within the component
 * like variables declared within a function .
 * 
 * 
 * Both States and Props are plain JS objects and are deterministic this means your component always 
 * generates the same output for the same combination of props
*/


/******How do we know if something goes inside props or states ? 
 * 
 * The rule of them is if the component needs to alter (modifier) one of its attributes at some point in time that 
 * that attribute should be part of its State otherwise id should just be a prop for that component
*/

/****State is a way to allow react to determine when it should re-render a component   
 * 
 * States life cycle starts with a default value when a component mounts and then modifications
 * 
 * of that value happen over time mostly generated from user event
*/

/*******Props is a way to pass a data */


/**********Context application programming interface or API context ********/

/*****Provide an alternative way to pass data through the component tree without having to 
 * pass props down manually at every level** */






//*****Create a simple App  it reprsent a simple blogging platform that little lemon has to **
/*****publish new innovative recipes  to its subscribers it consists of a header that contains a title
 * and the current user that is authenticated on the top right, the rest is rendred by the page component 
 */



import {UserProvider, useUser} from "./UserContext"
function LoggedInUser()
{
    const {user} = useUser();
    return (
        <p>Hello <span className="UserName">{user.name}</span></p>
    )
}

function Header()
{
    return (
        <header>
            <h1>Blog App</h1>
            <LoggedInUser />
        </header>
    )
}

function Page()
{
    const {user} = useUser();
    return (
        <div>
            <h2>What is Lorem ipsum</h2>
            <p>A good example of a paragraph contains a 
                topic sentence, details and a conclusion. 
                'There are many different kinds of animals that live in China.
                 Tigers and leopards are animals that live in China's forests in the north.
                  In the jungles, monkeys swing in the trees and elephants walk through 
                  the brush.</p>

                  <p>Writen by {user.name}</p>
        </div>
    )
}


function App()
{
    return (
        <div>
            <Header />
            <Page />
        </div>
    )
}


function Props()
{
    return (
        <UserProvider>
            <App />
        </UserProvider>
    )
}

export default Props;