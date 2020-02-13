import React, { useState } from 'react'
import styles from './Login.module.css'
import useFormValidation from '../hooks/useFormValidation'
import loginValidation from '../Auth/loginValidation'

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    repetedPassword: "",
}

function Login() {
const [login, setLogin] = useState(true);
const {handleChange, handleSubmit,handleBlur, values, errors, isSubmit} = useFormValidation(INITIAL_STATE, loginValidation, login)



    return(
        <div className={styles.mainDiv}>
        <form onSubmit={handleSubmit} className={styles.form}>
        {!login && 
       ( <input
        type="text"
        name="name"
        placeholder="Enter the name..."
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
         />
        )
        }  
           
                <input
                type="email"
            name="email"
            placeholder="Enter your e-mail..."
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}

             />
             {errors.email && <p className={styles.errors}>BŁAD:{errors.email}</p>}
                <input
                type="text"
            name="password"
            placeholder="Choose your password..."
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}

             />
                          {errors.password && <p className={styles.password}>BŁAD:{errors.password}</p>}

           {login || <input
             type="text"
             name="repetedPassword"
             placeholder="Repeat password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.repeatedPassword}
             />} 
            {errors.repetedPassword && <p className={styles.repetedPassword}>BŁAD:{errors.repetedPassword}</p>}


             <button type="Submit" style={{background: isSubmit ? "grey" : "yellow"}} disabled={isSubmit}>SUBMIT</button>
             <button type="button" onClick={() => 
            ( setLogin(prevState => !prevState
                
                )
            
            )
                   }>
           {!login ? "Already have an account" : "Do not have an account?"}</button>
        </form>
        </div>
    )
}


export default Login