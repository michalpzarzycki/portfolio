import React from 'react'
import useFormValidation from '../hooks/useFormValidation'
import articleValidation from '../Auth/articleValidation'
import styles from './AddArticle.module.css'
import FirebaseContext from '../firebase/context'
import { TextArea, Input, Button } from 'semantic-ui-react'


const INITIAL_STATE = {
    title:'',
    image:'',
    shortDesc:'',
    longDesc:'',

}

function AddArticle(props) {

    const { user, firebase } = React.useContext(FirebaseContext)
const { handleSubmit, handleChange, values } = useFormValidation(INITIAL_STATE, articleValidation, null,handleArticleCreate)
function handleArticleCreate() {
    if(!user) {
        props.history.push('/login')
    } else {
        const { title, image, shortDesc, longDesc} = values;
        const newLink = {
            title,
            image, 
            shortDesc,
            longDesc, 
            postedBy: {
                id: user.uid,
                name: user.displayName
            },
            votes:[],
            comments:[],
            created: Date.now(),
            readTime: ''

        }
        firebase.db.collection('articles').add(newLink);
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
            name="image"
             type="text"
              placeholder="Add image url"
              autoComplete="off"
              onChange={handleChange}
              value={values.image} />
            <TextArea name="shortDesc" style={{overflow:"auto", resize:"none"}} placeholder="Short description" onChange={handleChange} value={values.shortDesc} autoComplete="off"/>
            <TextArea name="longDesc"  style={{overflow:"auto", resize:"none"}} placeholder="Article..." onChange={handleChange} value={values.longDesc} autoComplete="off"/>
            <Button secondary type="submit">ADD ARTICLE</Button>
            
        </form>
        </div>
    )
}

export default AddArticle