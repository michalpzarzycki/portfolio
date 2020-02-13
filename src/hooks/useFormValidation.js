import React, { useState, useEffect } from 'react'
import firebase from '../firebase/firebase'



function useFormValidation(INITIAL_STATE, validation, isLoginPage="false", authentication) {
const [values, setValues] = useState(INITIAL_STATE);
const [errors, setErrors] = useState("")
const [isSubmit, setIsSubmit] = useState(false)
useEffect(() => {
if(isSubmit) {
    if(Object.keys(errors).length===0) 
    {
        authentication()

        setIsSubmit(false)
    } else {
        setIsSubmit(false)
        
    }
}

}, [errors])

function handleChange(event) {
    event.persist();
setValues(prevValues => ({
    ...prevValues,
    [event.target.name]:event.target.value
}))
}

function handleSubmit(event) {
event.preventDefault();
validation(values, isLoginPage)
setIsSubmit(true)
setErrors(validation(values))
}

function handleBlur() {
    const validateErrors = validation(values);
    setErrors(validateErrors)
}
    return {handleChange, handleSubmit, handleBlur, values, errors, isSubmit}
}

export default useFormValidation