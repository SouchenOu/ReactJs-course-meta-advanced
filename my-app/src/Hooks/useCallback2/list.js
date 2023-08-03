import { useState, useEffect } from "react";

function List({getItems})
{

    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(getItems())
        console.log("Updating items")
    }, [getItems])
    return items.map(item => <div>{item}</div>)
} ;

export default List;