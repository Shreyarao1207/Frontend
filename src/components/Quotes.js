import React,{useState,useEffect}from 'react'
import "./Quote.css"
function Quotes() {
    
    
    const [quotes,setquotes]=useState("")
   
    const randquotes= async()=>{
   const res = await fetch("https://type.fit/api/quotes")
   const data = await res.json()
   let rannum=Math.floor(Math.random()*data.length)
   setquotes(data[rannum]);
    }
    useEffect(()=>{
          randquotes();
    },[])
   
    
  return (
    <>
    <div className="main">
      <div className="Container">
        <p>{quotes.text}</p>
        <p > Author : {quotes.author}</p>
      <button onClick={randquotes}>Next Quote</button>
    
      </div>
      </div>
    </>
  )
}

export default Quotes
