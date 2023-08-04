//useMemo() allows us to cash a value we are essentially stopping it from re-rendering everytime
// a component  re-renders it essentially saves the value and it is going to reference it after the next re-render 

import React , {useState, useRef} from 'react';


/*****Promises allow you to perform asynchronous operations in JavaScript. To construct a Promise from scratch, you can use the Promise constructor. This takes a function which takes two parameters: “resolve”, a function to call when the operation completes, and “reject”, a function to call if the operation fails.
 *  You then have to call one of these functions when your operation completes. */



//*********onother example

/*****const promiseThen = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hi!');
    }, 1000);
});

promiseThen
    .then((val) => {
        console.log(val);
    })
    .catch((err) => console.log(err)); */

const sumFun = (x , y) =>
{
        return new Promise((resolve, reject) => {
            setTimeout(() => {const res = x + y;
                resolve(res);
            }, 1000);
        });
};

const App = () => {
    const [sum , setSum] = useState(0);
    const firstNum = useRef();
    const lastNum = useRef();

    const handleSum = () => {
        sumFun(+firstNum.current.value, +lastNum.current.value).then((res) =>
        setSum(res)
        );
    }
    return (
        <div>
            sum: {sum}
            <br />
            <input ref={firstNum}/>
            <br />
            <input ref={lastNum} />
            <br />
            <button onClick={handleSum}> Calc</button>
        </div>
    );
};

export default App;

