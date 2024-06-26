"use client"

import { useState } from "react";





const Counter = () => {
    const [count,setCount]= useState(0)

            //  console.log(count)
    
    return (
        <div>
             <div  className="flex gap-6">
             <button className="btn  btn-primary" onClick={()=>setCount(count+1)}>+</button>
            <button className="btn  btm-secondery" onClick={()=>setCount(count-1)}>-</button>
   
             </div>

          <h1> Total Counter :{count}</h1>
        </div>
    );
};

export default Counter; 