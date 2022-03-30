import React, {useState} from "react";
import './App.css';


function App() {


const [name, setName] = useState("");
const [text, setText]= useState("");
const [mouseOver, setMouseOver] = useState(false);

function handleClick(){
setText(name);
}

function handleChange(event){
  setName(event.target.value);
}

function handleMouseOver(){
  setMouseOver(true);
}
function handleMouseOut(){
  setMouseOver(false);
}
  return (
    <div class="container">
      <h1>Hello {text}</h1>
      <input class="textbox" onChange={handleChange} type="text" placeholder="what's your text" 
      value={name}
      ></input>
      <button class="btn" style={{ color:"#006600", backgroundColor:mouseOver ? "black" : "white"}}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >Submit</button>
    </div>
  );
}

export default App;
