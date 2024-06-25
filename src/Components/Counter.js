"use client"

import { useState } from "react";





const Counter = () => {
    const [count,setCount]= useState(0)

             console.log(count)
    
    return (
        <div>
              <button className="btn  p-2 bg-rose-300" onClick={()=>setCount(count+1)}>+</button>
            <button className="btn  p-2 bg-green-300" onClick={()=>setCount(count-1)}>-</button>
   

          <h1> Total Counter :{count}</h1>
        </div>
    );
};

export default Counter; 