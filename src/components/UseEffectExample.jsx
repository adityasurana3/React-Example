import { useEffect, useState } from "react";


function UseEffectExample(){
    const [count, setCount] = useState(0);


    // Without dependencies
    // useEffect(() => {
    //     setTimeout(() =>{
    //       setCount(count => count+1)
    //     },2000)
    // });
    // Using blank dependecies
  //   useEffect(() => {
  //     setTimeout(() =>{
  //       setCount(count => count+1)
  //     },2000)
  // }, []);

  // Using 'Count' dependecies
  useEffect(() => {
    // Api fetch
    setTimeout(() =>{
      setCount(count => count+1)
    },2000)
}, [count]);

  return <p>I have rendered {count} times</p>;

}

export default UseEffectExample;

// return statement