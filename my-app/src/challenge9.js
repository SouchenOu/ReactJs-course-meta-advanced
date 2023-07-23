// Challenge 9 (Using props)

/******Pass props to card component */

function Jock({setup, punchline, isPun, upvotes})
{
    return (
        <div>
            {setup && <h3>Setup : {setup}</h3>}2
            <p>{punchline}</p>
            <p>{isPun}</p>
            <p>{upvotes}</p>
            <hr />
        </div>
    )
}



function Challenge9(){

    return (
        <div>

            <Jock 
                setup = "How did the Police escap the police"
                punchline = "He just ransomware"
                isPun={true}
                upvotes={10}
            />
             <Jock 
                setup = "how did i work to be success"
                punchline = "He just ransomware"
                isPun={true}
                upvotes={20}
            />
             <Jock
                setup = "How we can be a software developper"
                punchline = "He just ransomware"
                isPun={true}
                upvotes={30}

            />
        </div>
    )

}

export default Challenge9;