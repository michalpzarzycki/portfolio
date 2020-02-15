import React from 'react'
import FirebaseContext from '../firebase/context'
import { Link, withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import styles from './ArticleItem.module.css'

function ArticleItem({ article, index, history }) {
    const { user, firebase } = React.useContext(FirebaseContext)


    function handleLikes() {
        console.log("handlearts", article)
        if (!user) {
            history.push('/login')
        } else {
            console.log("ID", article)
            const likes = firebase.db.collection('articles').doc(article.id);
            likes.get().then(doc => {
                if (doc.exists) {
                    const previousLikes = doc.data().votes;
                    const like = { votedBy: { id: user.uid, name: user.displayName } }
                    const updatedlikes = [...previousLikes, like]
                    likes.update({ votes: updatedlikes })
                }
            })
        }
    }


    return (
        <div key={index} className={styles.mainDiv}>
            <div className={styles.title}>{article.title}</div>
            <div className={styles.description}>{article.shortDesc}</div>
            <div className={styles.details}>
                <div className={styles.rightDetails}>
                    <div>{article.postedBy.name}</div>
                    <div>| <Link to={`/article/${article.id}`} >read more</Link></div>
                </div>
                <div className={styles.leftDetails}>
                    <div>{article.created}</div>
                    <div onClick={handleLikes}><Icon name="thumbs up outline" />LUBIE TO: {article.votes.length}</div>
                </div>

            </div>
        </div>
    )
}

export default withRouter(ArticleItem)