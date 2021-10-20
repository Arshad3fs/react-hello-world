import React, { useState } from "react";
import './App.css';
import Participants from "./Participants";

function App() {

  const [data, setData] = React.useState(
    {
      framework: 'ReactJS',
      language: 'JS',
      participants: ["Suhail", "Farooq", "Reddy Basha", "Mehboob"]
    }
  );

  const [greet, setGreet] = useState("Mehboob");  

  function handleClick() {
    // setData({name: "Shaik Umar Farooq"})    
  }  

  return (
    <div className="App">
      <h2> Hello we are learning {data.framework} in language {data.language}</h2>
      <Participants students={data.participants}/>
      <button onClick={handleClick} style={{backgroundColor: "green", padding: 5, width: 300, color: "white"}}> Update Data </button>
    </div>
  );  
}

export default App;
