
/*********Build an AirBnb experiences Clone | Review -array.map()*/


//challenge1*****************************

//*******Given an array of numbers, return an array of each number, squared */


const nums = [1,2,3,4,5,6]

const squared = nums.map(function(item){
    return item + 1;
})

console.log(squared);




//Challenge2*****************************
//*******Given an array of strings, return an array where the first letter of each string is capitalized */

/*****Method1 */
const name = ["alice", "bob", "charlie", "danielle"]

const chall = name.map(function(item){
    var result ;
    for(var i = 0; i < item.length; i++)
    {
        if(i === 0 && item[0] === item[0].toLowerCase())
        {
            item[i]= item[i].toUpperCase();
            result = item[i].toUpperCase();
        }else
            
            result += item[i];
    }
   
    return result;
})

console.log(chall);

//challenge3*********************************

const names = ["alice", "bob", "charlie", "danielle"]

const upperCase = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
})

console.log(upperCase);




/***********Build an AirBnd Experiences clone | Mapping Componenets* */

function Jock(props)
{
    return (
        <div>
            {props.setup && <h3>Setup : {props.setup}</h3>}2
            <p>{props.punchline}</p>
            <p>{props.isPun}</p>
            <p>{props.upvotes}</p>
            <hr />
        </div>
    )
}

function Challenge10()
{

   let JocksData = [
    {
        setup:"hello1",
        punchline:"Salut1",
        isPun: true,
        upvotes:10
    },
    {
        setup:"Hello2",
        punchline:"Salut2",
        isPun: true,
        upvotes:20
    }
    ]
   
        const jocksElement = JocksData.map(function(elem)
        {
            return <Jock setup = {elem.setup} punchline = {jocksElement.punchline} isPun= {elem.isPun} uovotes= {elem.upvotes}/>
        })

        return (
            {jocksElement}
        )
       
    
}

export default Challenge10;
