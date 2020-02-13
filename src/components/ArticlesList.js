import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArticleItem from './ArticleItem'
import FirebaseContext from '../firebase/context'
import styles from './ArticlesList.module.css'

function ArticlesList(props) {
const { user, firebase } = React.useContext(FirebaseContext)
const [articles, setArticles] = useState([])
 useEffect(() => {
     firebase.db.collection('articles').onSnapshot((snapshot) => {
      const arts = snapshot.docs.map(doc => {
             return { id:doc.id, ...doc.data()}
         })
         console.log("arts",arts)
        setArticles(arts)
        console.log("ARTICLES, ", articles)
        }
     )
     
 }, [])




    return(
        <div className={styles.mainDiv}>
{articles.map((article, index) => {
    console.log("article", article)
    return (
    < ArticleItem key={index} article={article}/>
    )
})}
        </div>
    )
}

export default ArticlesList