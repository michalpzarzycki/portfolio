import React, { useContext } from 'react'
import { Input, TextArea, Button } from 'semantic-ui-react'
import useFormValidation from '../hooks/useFormValidation'
import styles from './AddDev.module.css'
import firebase from '../firebase/firebase'
import FirebaseContext from '../firebase/context'
import { parseWithOptions } from 'date-fns/fp'

const INIT_STATE = {
    name:"",
    link:"",
    avatar:"",
    description:""
}

function AddDev(props) {

const { handleChange, handleSubmit, values } = useFormValidation(INIT_STATE, validateAddDev, null, handleDevCreate);
const { user, firebase } = useContext(FirebaseContext)
 function validateAddDev() {
     return 0;
 }

 function handleDevCreate() {
     if(!user) {
         props.history.push('/')
     } else {
        const { name, link, avatar, description } = values;
        const newDev = {
            name,
            link,
            avatar,
            description
        }
        firebase.db.collection('devs').add(newDev)
     }
 }
    return(
        <form onSubmit={handleSubmit} className={styles.form}>  
           
            <Input onChange={handleChange} value={values.name} name="name" type="text" placeholder="Dev's name"/>
            <Input onChange={handleChange} value={values.link} name="link" type="text" placeholder="Github link"/>
            <Input onChange={handleChange} value={values.avatar} name="avatar" type="text" placeholder="Avatar URL" />
            <TextArea onChange={handleChange} value={values.description} name="description" type="text" placeholder="Dev's description"/>
            <Button type="submit" onClick={()=>{console.log("CLICK")}}>ADD DEV</Button>
            </form>
            
    )
}

export default AddDev