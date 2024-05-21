import React, { useEffect, useState } from 'react'

const url= "https://jsonplaceholder.typicode.com/users";

function Index() {
    const [data,setdata]= useState([]);
    const [loading,setloading]= useState(false);
    const [error, seterror]= useState({status: false, msg: " "});

    const userdetails = async(url)=>{
        setloading(true);
        seterror({status: false, msg: " "});
        try{
            const response= await fetch(url);
            const data= await response.json();
            setdata(data);
            setloading(false);
            seterror({status: false, msg: " "});
            if(response.status== 404 ){
                throw new Error("data not found");
            }
        }catch(error){
            setloading(false);
            seterror({
            status: true,
            msg: error.message || "something went wrong, pls try again!",
        });
        }
    }

    useEffect(()=>{
        userdetails(url);
    },[])

    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }
    if(error?.status){
        return (
            <div>
              <h3 style={{ color: "red" }}>{error?.msg}</h3>
            </div>
          );
    }

  return (
    <div>
        <h2>Example1</h2>
        <ul>
        {data.map((eachitem)=>{
            return(
            <li key={eachitem.id}>
                <div>{eachitem.name}</div>
                {eachitem.email}
            </li>
            );
        })}
        </ul>
    </div>
  )
}

export default Index;