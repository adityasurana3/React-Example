import React, { useState } from "react";
import UseStateExample from './components/UseStateExample';
import UseEffectExample from "./components/UseEffectExample";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import ReRenderingExample from "./components/ReRenderingExample";
import CustomHooks from "./components/CustomHooks";
import DebouncedSearch from "./components/DebouncedSearch";
import ReactMemoExample from "./components/ReactMemoExample";
 

function App() {

  return (
    <div>
      {/* <UseStateExample /> */}
      {/* <UseEffectExample /> */}
      {/* <UseMemoExample /> */}
      {/* <UseCallbackExample /> */}
      {/* <ReactMemoExample /> */}
      {/* <CustomHooks /> */}
      <DebouncedSearch />
      
      
    </div>
  );
}



export default App;
