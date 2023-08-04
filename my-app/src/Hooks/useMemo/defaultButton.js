import React , {useEffect, useRef} from "react"



const DefaultButton = ({onClick, label}) =>
{
    const renderRef = useRef(0);
    useEffect(() => console.log(renderRef.current++));
    return (
        <button onClick={onClick}>BTN</button>
    )
}

export default DefaultButton;