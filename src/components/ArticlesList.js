import React, { useEffect, useState } from 'react'
import FirebaseContext from '../firebase/context'
import styles from './ArticlesList.module.css'

function ArticlesList() {
const { firebase } = React.useContext(FirebaseContext)
const [articles, setArticles] = useState([])
 useEffect(() => {
     firebase.db.collection('articles').onSnapshot((snapshot) => {
      const arts = snapshot.docs.map(doc => {
             return { id:doc.id, ...doc.data()}
         })
        setArticles(arts)
        }
     )
     
 }, [])
    return(
        <div className={styles.mainDiv}>
{articles.map((article, index) => {
    return <div key={index}>INDEX{article.id}</div>
})}
        </div>
    )
}

export default ArticlesList