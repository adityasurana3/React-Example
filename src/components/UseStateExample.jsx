import { useState } from "react";


function UseStateExample(){

    // Example 1: Why we need useState

    // let color = "Red"
    // function handleClick(){      
    //   color = "Blue"
    //   console.log(color);
    // }

    // return (
    //   <>
    //   <h1>Red</h1>
    //   <button onClick={handleClick}>Change Color</button>
    //   </>
    // )

    // Example 2: Introducing useState

    const [name, setName] = useState('')
    function handleClick() {
      setcolor("Blue")
    }

    // return (
    //   <>
    //   <h1>{color}</h1>
    //   <button onClick={handleClick}>Change Color</button>
    //   </>
    // )

    // Example 3

    const [count, setCount] = useState(0);

    // const increment = () => setCount(count + 1);

    function increment() {
      // setCount(count + 1) //intital value(0) + 1
      // setCount(count + 1) //intital value(0) + 1
      // setCount(count + 1) //intital value(0) + 1
      // setCount(count + 1) //intital value(0) + 1

      // setCount((prev) => prev+1)
      // setCount((prev) => prev+1)
      // setCount((prev) => prev+1)
      // setCount((prev) => prev+1)
    }
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  
}

export default UseStateExample;