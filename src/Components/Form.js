import React, {useState, useContext} from "react";
import { LoginContext } from "../Context/LoginContext";


function Form() {


    const { setFname, setLname, setText }=useContext(LoginContext);
    const [mouseOver, setMouseOver] = useState(false);
    
    
      return (
        <div class="container">
        <h1 class="text">Login</h1>
          <div>
          <input class="textbox" onChange={(event)=>{
      setFname(event.target.value);
    }} type="text" placeholder="First Name" 
          
          ></input>
          </div>
          <div>
          <input class="textbox" onChange={(event)=>{
      setLname(event.target.value);
    }} type="text" placeholder="Last Name" 
         
          ></input>
          </div>
          <div>
          <button class="btn" style={{ color:"##000033", backgroundColor:mouseOver ? "#004d00" : "white"}} 
          onClick={()=>setText(true)}
          onMouseOver={()=>{
      setMouseOver(true);
    }}
          onMouseOut={()=>{
      setMouseOver(false);
    }}
          >Submit</button>
          </div>
          
        </div>
      );
    }
    export default Form;