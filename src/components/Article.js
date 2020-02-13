import React, { useEffect, useState } from 'react'
import styles from './Article.module.css'
import FirebaseContext from '../firebase/context'
const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    repetedPassword: "",
    votes: [],
    comments: [],
    postedBy: {
        name: '',
        id: ''
    }
}
function Article(props) {
    const { firebase, user } = React.useContext(FirebaseContext)

    const [article, setArticle] = useState(INITIAL_STATE)
    const ArticleId = props.match.params.articleId

    useEffect(() => {
        const articleRef = firebase.db.collection('articles').doc(ArticleId);
        console.log(articleRef)
        articleRef.get().then(doc => {
            setArticle({ ...doc.data(), id: doc.id })
            console.log("article", article)
        }
        )

    }, [])

    return (
        <div className={styles.mainDiv}>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.short}>{article.shortDesc}</p>

            <div className={styles.infoSection}>
                <div className={styles.who}>
                    <div>kto: {article.postedBy.name}</div>
                    <div>kiedy: {article.created}</div>
                </div>
                <div className={styles.likes}>
                    <div>LAJKI:{article.votes.length}</div>
                    <div>ile czytania:</div>
                </div>
            </div>

            <p>{article.longDesc}</p>

            <div>COMMENTS</div>

            <div>ADD COMMENT</div>

        </div>
    )
}

export default Article;