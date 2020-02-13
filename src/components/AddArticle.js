import React from 'react'
import useFormValidation from '../hooks/useFormValidation'
import articleValidation from '../Auth/articleValidation'
import styles from './AddArticle.module.css'
import FirebaseContext from '../firebase/context'


const INITIAL_STATE = {
    title:'',
    image:'',
    shortDesc:'',
    longDesc:'',
    date:'',
    readMins:''

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
            <input 
            name="title" 
            type="text" 
            placeholder="Enter the title"
            onChange={handleChange}
            value={values.title} />
            <input 
            name="image"
             type="text"
              placeholder="Add image url"
              onChange={handleChange}
              value={values.image} />
            <textarea name="shortDesc" placeholder="Short description" onChange={handleChange} value={values.shortDesc}/>
            <textarea name="longDesc" placeholder="Article..." onChange={handleChange} value={values.longDesc}/>
            <button type="submit">ADD ARTICLE</button>
            
        </form>
        </div>
    )
}

export default AddArticle