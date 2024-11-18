import React, {useState} from 'react'

const Child = React.memo(({ name }) => {
    console.log("Child re-rendered!");
    return <p>Child Name: {name}</p>;
  });

//   const Child = ({ name }) => {
//     console.log("Child re-rendered!");
//     return <p>Child Name: {name}</p>;
//   };
  

function ReactMemoExample() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John");
  
    return (
      <div>
        <h1>Parent Component</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
        <button onClick={() => setName(name === "John" ? "Jane" : "John")}>
          Change Name
        </button>
        <Child name={name} />
      </div>
    );
  
}

export default ReactMemoExample;