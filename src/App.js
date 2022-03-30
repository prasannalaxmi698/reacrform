import React, {useState} from "react";
import './App.css';


function App() {


const [fName, setFname] = useState("");
const [lName, setLname] = useState("");
const [text, setText]= useState("");
const [mouseOver, setMouseOver] = useState(false);

function handleClick(){
setText(fName+' '+lName);
}

function handleChangeFirst(event){
  setFname(event.target.value);
}
function handleChangeLast(event){
  setLname(event.target.value);
}

function handleMouseOver(){
  setMouseOver(true);
}
function handleMouseOut(){
  setMouseOver(false);
}
  return (
    <div class="container">
      <h1 class="text">Hello {text}</h1>
      <div>
      <input class="textbox" onChange={handleChangeFirst} type="text" placeholder="First Name" 
      value={fName}
      ></input>
      </div>
      <div>
      <input class="textbox" onChange={handleChangeLast} type="text" placeholder="Last Name" 
      value={lName}
      ></input>
      </div>
      <div>
      <button class="btn" style={{ color:"##000033", backgroundColor:mouseOver ? "#004d00" : "white"}}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >Submit</button>
      </div>
    </div>
  );
}

export default App;
