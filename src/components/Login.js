import React, { useState } from 'react'
import styles from './Login.module.css'
import useFormValidation from '../hooks/useFormValidation'
import loginValidation from '../Auth/loginValidation'
import firebase from '../firebase/firebase'
import { Button, Input } from 'semantic-ui-react'

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    repetedPassword: "",
}

function Login(props) {
    const [login, setLogin] = useState(true);
    const { handleChange, handleSubmit, handleBlur, values, errors, isSubmit } = useFormValidation(INITIAL_STATE, loginValidation, login, authenticateUser)
    const [firebaseErr, setFirebaseErr] = useState(null)

    async function authenticateUser() {
        const { name, email, password } = values;

        try {
            const response = login ?
            await firebase.login(email, password) :
            await firebase.register(name, email, password);

            props.history.push('/')
        } catch(err) {
       
            setFirebaseErr(err)
            console.log(err)
        }
    
        
    }
    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit} className={styles.form}>
                {!login &&
                    (<Input
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

                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your e-mail..."
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}

                />
                {errors.email && <p className={styles.errors}>BŁAD:{errors.email}</p>}
                <Input
                    type="text"
                    name="password"
                    placeholder="Choose your password..."
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}

                />
                {errors.password && <p className={styles.password}>BŁAD:{errors.password}</p>}

                {login || <Input
                    type="text"
                    name="repetedPassword"
                    placeholder="Repeat password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.repeatedPassword}
                />}
                {errors.repetedPassword && <p className={styles.repetedPassword}>BŁAD:{errors.repetedPassword}</p>}
                {firebaseErr && <p>BŁAD:{firebaseErr.message}</p>}



                <Button primary type="Submit">SUBMIT</Button>
                <Button secondary type="button" onClick={() =>setLogin(prevState => !prevState)}>
                    {!login ? "Already have an account" : "Do not have an account?"}</Button>
            </form>
        </div>
    )
}


export default Login