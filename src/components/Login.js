import React, { useState } from 'react'
import styles from './Login.module.css'

function Login() {
const [login, setLogin] = useState(true)
    return(
        <div className={styles.mainDiv}>
        <form className={styles.form}>
        {!login && 
        <input
        type="text"
        name="name"
        placeholder="Enter the name..."
        autoComplete="off"
         />}    
                <input
                type="email"
            name="email"
            placeholder="Enter your e-mail..."
            autoComplete="off"
             />
                <input
                type="password"
            name="password"
            placeholder="Choose your password..."
            autoComplete="off"
             />
           {login || <input
             type="password"
             name="repetedPassword"
             placeholder="Repeat password" />}  
             <button type="Submit">SUBMIT</button>
             <button type="button" onClick={() => setLogin(prevState => !prevState)}>
           {!login ? "Already have an account" : "Do not have an account?"}</button>
        </form>
        </div>
    )
}


export default Login