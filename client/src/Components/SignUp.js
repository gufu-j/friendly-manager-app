// import React from "react";
// import { useState, useContext } from "react";
// import { UserContext } from "./context/user";
// import { useNavigate } from "react-router-dom";


// function SignUp({admin, setAdmin, phoneNumber, setPhoneNumber, location, setLocation}){

//     console.log(admin)

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordConfirmation, setPasswordConfirmation] = useState("");
//     const [emailAddress, setEmailAddress] = useState("")
//     const [errors, setErrors] = useState([])

//     const{signup, user} = useContext(UserContext)
//     const navigate = useNavigate()
    

//     function handleSubmit(e) {
//         e.preventDefault();
//         fetch("/signup", {
//             method: "POST",
//             headers: {
//                 "Content-Type" : "application/json",
//             },
//             body: JSON.stringify({
//                 username: username,
//                 password: password,
//                 password_confirmation: passwordConfirmation,
//                 email_address: emailAddress,
//                 admin: admin,
//             }),
//         })
//         .then(res => res.json())
//         .then(user => {
//             if (!user.errors) {
//                 signup(user)
//                 navigate('/')
//              } else {
//                 setUsername("")
//                 setPassword("")
//                 setPasswordConfirmation("")
//                 setEmailAddress("")
//                 setAdmin(false)
//                 const errorLis = user.errors.map(e => <ul style={{color:"red"}} key={e}>{e}</ul>)
//                 setErrors(errorLis)
//              }
//         })

//         fetch("/log_in_create_store", {
//             method: "POST",
//             headers: {
//                 "Content-Type" : "application/json",
//             },
//             body: JSON.stringify({
//                 phone_number:  phoneNumber,
//                 location: location,
//                 user_id: user.id
//             }),
//         })
//         .then(res => res.json())
//         .then(data =>  {
//             if (!data.errors) {
//              } else {
//                 setLocation("")
//                 setPhoneNumber("")
//                 const errorLis = user.errors.map(e => <ul style={{color:"red"}} key={e}>{e}</ul>)
//                 setErrors(errorLis)
//              }
//         })        
//     }


//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h1> Sing up </h1>
//                     <input type= "text" id="username" value= {username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
//                         <input type= "text" id="password" value= {password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
//                             <input type= "text" id="passwordConfirmation" value= {passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="password confirmation"/>
//                                 <input type= "text" id="emailAddress" value= {emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder="email_address"/>
//                                      <input type= "text" id="phoneNumber" value= {phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="store phone number"/>
//                                         <input type= "text" id="location" value= {location} onChange={(e) => setLocation(e.target.value)} placeholder="store location"/>
//                                  <button type= "submit">Sign up</button>
//             </form>
//             <ul>
//                 {errors}
//             </ul>
//         </div>
//     )
// }


// export default SignUp