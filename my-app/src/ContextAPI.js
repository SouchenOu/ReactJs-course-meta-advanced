
/**********Context application programming interface or API context ********/

/*****Provide an alternative way to pass data through the component tree without having to 
 * pass props down manually at every level** */






//*****Create a simple App  it reprsent a simple blogging platform that little lemon has to **
/*****publish new innovative recipes  to its subscribers it consists of a header that contains a title
 * and the current user that is authenticated on the top right, the rest is rendred by the page component 
 */


/*******How the Context API Works
Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components. */

// import {UserProvider, useUser} from "./UserContext"
import {useState} from "react"
function LoggedInUser(props)
{
    // const {user} = useUser();
    return (
        <div>
                <p>Hello <span className="UserName">{props.name}</span></p>
                <p>Hello <span className="UserName">{props.age}</span></p>
        </div>
        

    )
}

function Header()
{
    const [array] = useState([{
        name: "test1",
        age: "12",
    },
    {
        name: "test2",
        age: "20",
    },
])
    return (
        <header>
            <h1>Blog App</h1>
            {array.map(function(elem){
                return <LoggedInUser name = {elem.name} age = {elem.age} />
            })}
            
        </header>
    )
}

// function Page()
// {
//     const {user} = useUser();
//     return (
//         <div>
//             <h2>What is Lorem ipsum</h2>
//             <p>A good example of a paragraph contains a 
//                 topic sentence, details and a conclusion. 
//                 'There are many different kinds of animals that live in China.
//                  Tigers and leopards are animals that live in China's forests in the north.
//                   In the jungles, monkeys swing in the trees and elephants walk through 
//                   the brush.</p>

//                   <p>Writen by {user.name}</p>
//         </div>
//     )
// }


function ContextAPI()
{
    // const [user] = useState({
    //     name: "soukaina",
    //     lastname: "ouchen",
    // })
    return (
        <div>
            <h1>Hello</h1>
            <Header/>
            {/* <Page /> */}
        </div>
    )
}


// function Root()
// {
    
//     return (
//         <div>
//             <UserProvider>
//                 <ContextAPI/>
//             </UserProvider>
//         </div>
        
//     )
// }

export default ContextAPI;