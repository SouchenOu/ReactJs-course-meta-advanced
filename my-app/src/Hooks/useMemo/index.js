import { useState, useMemo } from "react";
import DefaultButton from "./defaultButton";

function Index()
{
    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount((c) => c + 1);
    }
    const MemoiseBtn = useMemo(() => (
        <DefaultButton onClick={handleCount}/>
    ), [])
    return (
        <div>
            <p>count : {count}</p>
            {/* <DefaultButton onClick={handleCount} /> */}
            {MemoiseBtn}
        </div>
    )
}

export default Index;