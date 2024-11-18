import { useState, useCallback } from "react";
import Header from "./Header";


function UseCallbackExample(){
    const [count, setCount] = useState(0);

    // const newFn = () => {}
    // const newFn = useCallback(() => {},[])
    const newFn = useCallback(() => {},[count])
    
    return (
      <div>
        <Header newFn={newFn} />
        {/* <Header />   */}
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev=>prev+1)}>Increment</button>
      </div>
    );
  
}

export default UseCallbackExample;