import { useEffect, useState} from "react";
import React from 'react'

function Index() {
    const [count, setcount]= useState(0);
    const [pagewidth,setPageWidth]= useState(window.innerWidth);
    useEffect(()=>{
        const resizeHandler = () => {
            setPageWidth(window.innerWidth);
          };
        window.addEventListener("resize", resizeHandler);
        console.log("Hello I am coming from useEffect", count);
        return () => {
            console.log("I am removing");
            window.removeEventListener("resize", resizeHandler);
          };
    })
  return (
    <div>
        <h2>UseEffect</h2>
        <h2>pageWidth: {pagewidth}</h2>
        <h1>{count}</h1>
        <button onClick={()=> setcount(count+1)}>+</button>
    </div>
  )
}

export default Index;