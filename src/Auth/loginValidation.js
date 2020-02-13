import React from 'react'

function loginValidation(values, isLoginPage) {

    let errors = {}

    if(!values.email) errors.email = "Email require"
    if(!values.password) errors.password = "Password required"
    // if(!isLoginPage && values.password != values.repeatedPassword) errors.repeatedPassword = "Passwords have to be the same"

   return errors
}

export default loginValidation