import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate } from "react-router-dom";


function SignUp({}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [admin, setAdmin] = useState(false)
    const [errors, setErrors] = useState([])

    const{signup} = useContext(UserContext)
    const navigate = useNavigate()

    // console.log(errors)
    

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
                admin: admin,
            }),
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate('/')
             } else {
                console.log(user)
                setUsername("")
                setPassword("")
                setPasswordConfirmation("")
                const errorLis = user.errors.map(e => <li style={{color:"red"}} key={e}>{e}</li>)
                setErrors(errorLis)
             }
        })
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1> Sing up </h1>
                    <input type= "text" id="username" value= {username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
                        <input type= "text" id="password" value= {password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                            <input type= "text" id="passwordConfirmation" value= {passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="password confirmation"/>
                                 <button type= "submit">Sign up</button>
            </form>
            <ul>
                {errors}
            </ul>
        </div>
    )
}


export default SignUp