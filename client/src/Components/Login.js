import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate } from "react-router-dom";


function Login(){

    //Login section comes mostly from Prof. Nancy's lecture as reference.

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const {login} = useContext(UserContext)

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                 username: username,
                 password: password,
             })
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((userInfo) => login(userInfo))
                navigate("/")
            } else {
                r.json().then((err) => {
                    if (err.errors) {
                        setErrors(Object.values(err.errors));
                    } else {
                        setErrors([err.error])
                    }
                });
            }
        })
    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <h1> Login </h1>
                    <input type= "text" id= "username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
                        <input type= "password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                            <button type="submit"> Login </button>
            </form>
        </div>
            {errors.map((err) => (
                <li style={{ color: "red" }} key={err}>
                    {err}
                </li>
            ))}

        </>
    );
}

export default Login