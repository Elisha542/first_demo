import React,{useState} from 'react'
const App=()=>{
  const [name,setName]=useState("Elisha")
  return(
    <div>
      <h1>I changed my name {name}</h1>
    </div>
  )
}
export default App