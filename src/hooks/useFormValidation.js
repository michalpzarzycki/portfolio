import React, { useState, useEffect } from 'react'



function useFormValidation(INITIAL_STATE, validation, isLoginPage) {
const [values, setValues] = useState(INITIAL_STATE);
const [errors, setErrors] = useState("")
const [isSubmit, setIsSubmit] = useState(false)
useEffect(() => {
if(isSubmit) {
    if(Object.keys(errors).length===0) 
    {
        setIsSubmit(false)
        console.log("auth, ", values)
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
}

function handleBlur() {
    const validateErrors = validation(values);
    setErrors(validateErrors)
}
    return {handleChange, handleSubmit, handleBlur, values, errors, isSubmit}
}

export default useFormValidation