import React, { useState } from "react";


function ReRenderingExample(){
    const [username, setUsername] = useState("User 1");

    function handleChange() {
        setUsername("User" + " " + Math.floor(Math.random() * 100));
    }
        return(
            <>
            <button onClick={handleChange}>Change Username</button>
            <Header username={username} />
            <Header username="User 2" />
            <Header username="User 3" />
            <Header username="User 4" />
            <Header username="User 5" />
            </>
        )
    }

// function Header({ username }) {
//     console.log("Rendering Profile");
//     return (
//       <div>
//         <p>Username: {username}</p>
//       </div>
//     );
//   }
const Header = React.memo(function Header({ username }) {
    console.log('Rendering Profile');
    return (
      <div>
        <p>Username: {username}</p>
      </div>
    );
  });


export default ReRenderingExample;


// function MyComponent() {
//     const fruits = ["Apple", "Banana", "Cherry"];
    
//     return (
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//     );
//   }
  