import React, { useEffect, useState, useRef } from 'react'

function Index() {
    const [data, setData]= useState("");
    const inpdom= useRef("");
    const inpdom1= useRef("");

    useEffect(()=>{
        console.log(inpdom);
        console.log(inpdom1);
    })

    const focus=()=>{
        inpdom.current.focus();
    }

    const focus1=()=>{
        inpdom1.current.focus();
    }

  return (
    <div>
        <input ref={inpdom} value={data} placeholder='type here' onChange={(e)=> setData(e.target.value)}></input>
        <h4>Data : {data}</h4>
        <input ref={inpdom1} value={data} placeholder='type here' onChange={(e)=> setData(e.target.value)}></input>
        <h4>Data1 : {data}</h4>
        <button onClick={focus}>focus</button>
        <button onClick={focus1}>focus1</button>
    </div>
    )
}

export default Index;