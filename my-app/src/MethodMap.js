const data = [

    {
        id: 1,
        title: "Tiramisu",
        image: "",
        price: "5.2$",

    },
    {
        id: 2,
        title: "Lemon ice cream",
        image: "",
        price: "7.2$",
    },
    {
        id: 3,
        title: "Chocolate mousse",
        image: "",
        price: "6.0$",
    },
];


const topDesserts = data.map(function(dessert){
    return  dessert.id === 1 ? dessert.title = "souchen" : dessert.title = "ouchen";
    
        // if(dessert.id ===1)
        // {
        //     dessert.title = "souchen";
        // }
    
        
    
})

export default function MethodMap()
{
    console.log(topDesserts);
   
    return <h1>Examine the console output</h1>
}