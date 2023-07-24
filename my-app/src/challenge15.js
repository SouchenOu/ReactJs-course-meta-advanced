import React from "react";

function Challenge15(){
    //Challenge1 : set the value of variable to NO
    const [isImportant, setIsImportant] = React.useState("Yes");
    function handleClick()
    {
        setIsImportant("No");
    }

    // Challenge2
    /****set up state to track our count (initial value is 0) */
    let [count, setCount] = React.useState(0);

    function Add()
    {
        count++;
        setCount(count);
    }

    function Soustraction()
    {
        count--;
        setCount(count);
    }
    return (
        <div>
            <h1 className="state--title">Is state important to know</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
            <div className="counter">
                <button onClick={Soustraction} className="counter--minus">-</button>
                <div className="counter--count">
                    <h1>{count}</h1>
                </div>
                <button onClick={Add} className="counter--plus">+</button>
            </div>
        </div>
    )
}

export default Challenge15;