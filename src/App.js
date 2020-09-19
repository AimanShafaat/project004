import React, { useState } from 'react';
import './App.css';

export default function App() {
  
  let [count, setCount] = useState(1);
  
  return (
    <div className="box" >
      <h1> Value of counter variable is : {count} </h1>
     <br/>
     <button onClick={() => setCount(count + 1)}>
         Update Counter
     </button>
    </div>
  );
}