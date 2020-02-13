import React from 'react'
import FirebaseContext from '../firebase/context'
import { Link } from 'react-router-dom'

function ArticleItem({ article, index, history}) {
    const { user, firebase } = React.useContext(FirebaseContext)


    function handleLikes() {
        console.log("handlearts", article)
        if(!user) {
            history.push('/login')
        } else {
            console.log("ID", article)
            const likes = firebase.db.collection('articles').doc(article.id);
            likes.get().then(doc => {
                if(doc.exists) {
                       const previousLikes = doc.data().votes;
                       const like = {votedBy: {id:user.uid, name: user.displayName}}
                       const updatedlikes = [...previousLikes, like]
                       likes.update({votes: updatedlikes})
                }
            })
        }
    }


    return (
        <div key={index}>
            <div>{article.title}</div>
            <div>{article.shortDesc}</div>
            <div>
                <div>{article.created}</div>
                <div>{article.postedBy.name}</div>
                <div>| <Link>read more</Link></div>
                <div onClick={handleLikes}>LUBIE TO: {article.votes.length}</div>
            </div>
        </div>
    )
}

export default ArticleItem