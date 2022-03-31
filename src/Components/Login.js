import React, {useContext} from "react";
import {LoginContext} from "../Context/LoginContext"

function Login(){
    const {fName, lName}= useContext(LoginContext);
    return(
        <div class="logincontext">
        <h1>Login Details</h1>
        <h2>UserName: {fName+' '+lName}</h2>
        </div>
    )
    
}
export default Login;