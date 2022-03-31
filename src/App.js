import React, {useState} from "react";
import './App.css';
import Form from "./Components/Form";
import Login from "./Components/Login";
import { LoginContext } from "./Context/LoginContext";

function App(){
  
  const [text, setText]= useState(false);
  const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");

  return(
    <>
    <LoginContext.Provider value={{lName, setLname, fName, setFname, setText}}>
    {text ? <Login /> : <Form />}
    </LoginContext.Provider>
    
    </>
  )
}
export default App;
