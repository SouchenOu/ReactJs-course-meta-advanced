import img from "./images/react-logo.png"

function Challenge2()
{
    return (
    <div>
          <img src={img} alt="react logo" height={40} width={40}/>
          <h1>Fun facts about React</h1>
          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan</li>
            <li>Has well over 100k stars on github</li>
            <li>Is maintained by Facebook</li>
          </ul>
        </div>
)
}

export default Challenge2;