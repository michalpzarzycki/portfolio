import React from 'react'
import useFormValidation from '../hooks/useFormValidation'
import styles from './AddArticle.module.css'
import FirebaseContext from '../firebase/context'
import { TextArea, Input, Button } from 'semantic-ui-react'


const INITIAL_STATE = {
    title:'',
    icon:'',
    description:'',
    dates: {},
    developers: {}

}

function AddProject(props) {

    const { user, firebase } = React.useContext(FirebaseContext)
const { handleSubmit, handleChange, values } = useFormValidation(INITIAL_STATE, validateArticle, null,handleProjectCreate)
function validateArticle() {
    return 0;
}
function handleProjectCreate() {
    if(!user) {
        props.history.push('/login')
    } else {
        const { title, icon, description, dates, developers} = values;
        const newLink = {
            title,
            icon, 
            description,
            dates: {
                created:"",
                lastChange:""
            }, 
            developers: [{
                name:"Mateusz Rostkowski",
                avatar: 'https://avatars2.githubusercontent.com/u/41584779?s=460&v=4',
                link:''
            },
            {
                name:"Michał Zarzycki",
                avatar:'https://avatars2.githubusercontent.com/u/41584779?s=460&v=4',
                link:''
            },
            {
                name:"Kinga Zawarczynska",
                avatar:'https://avatars2.githubusercontent.com/u/41584779?s=460&v=4',
                link:''
            }]

        }
        firebase.db.collection('projects').add(newLink);
    }
}
    return(
        <div className={styles.mainDiv}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input 
            name="title" 
            type="text" 
            placeholder="Enter the title"
            autoComplete="off"
            onChange={handleChange}
            value={values.title} />
            <Input 
            name="icon"
             type="text"
              placeholder="Icon name"
              autoComplete="off"
              onChange={handleChange}
              value={values.icon} />
            <TextArea name="description" style={{overflow:"auto", resize:"none"}} placeholder=" description" onChange={handleChange} value={values.description} autoComplete="off"/>
            <Button secondary type="submit">ADD ARTICLE</Button>
            
        </form>
        </div>
    )
}

export default AddProject