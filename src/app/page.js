"use client"
import { useState } from "react";

const HomePage = () => {
  const [count,setCount]=useState(0)



  return (
    <div className="min-h-screen">
            <button className="btn btn-primary" onClick={()=>setCount(count+1)}>+</button>
            <button className="btn btn-primary" onClick={()=>setCount(count-1)}>-</button>
   

          <h1>{count}</h1>
    </div>
  );
};

export default HomePage;