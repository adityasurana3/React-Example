import React, { useState, useMemo, useEffect } from 'react';

function UseMemoExample(){
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculating...");
    return Math.pow(num, 3);
  }

  // Without using useMemo
  // const result = cubeNum(number);

  // Using useMemo
  const result = useMemo(() => cubeNum(number), [number]);

  return (
    <>
      <input type="number" onChange={(e) => setNumber(Number(e.target.value))} />
      <h1>Cube of the number is {result}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter increment</button>
      <h1>Counter: {counter}</h1>
    </>
  );


}

export default UseMemoExample;
