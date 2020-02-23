import React, { useEffect, useState } from 'react'
import styles from './Article.module.css'
import FirebaseContext from '../firebase/context'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Loading from './Loading'
import { Comment, Header, Form, Button, Message } from 'semantic-ui-react'
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
    const [commentText, setCommentText] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState(INITIAL_STATE)
    const ArticleId = props.match.params.articleId

    useEffect(() => {
        const articleRef = firebase.db.collection('articles').doc(ArticleId);
        console.log(articleRef)
        articleRef.get().then(doc => {
            setArticle({ ...doc.data(), id: doc.id })
            setIsLoading(false)
            console.log("article", article)
        }
        )

    }, [commentText])

    function handleComment() {
        if (!user) {
            props.history.push('/login')
        } else {
            const comRef = firebase.db.collection('articles').doc(ArticleId);
            comRef.get().then(doc => {
                if (doc.exists) {
                    const previousComments = doc.data().comments;
                    const comment = {
                        postedBy: {
                            name: user.displayName,
                            id: user.uid
                        },
                        created: Date.now(),
                        text: commentText,
                        heart: false
                    }
                    const updatedComments = [...previousComments, comment]
                    comRef.update({ comments: updatedComments })
                    setArticle(prevState => (
                        { ...prevState, updatedComments }
                    ))
                    setCommentText("")
                } else {

                }
            })
        }
    }

    return (<React.Fragment>
        {isLoading ? <Loading /> :
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", top: "30px" }}>
                <div className={styles.mainDiv}>
                    <div className={styles.title}>{article.title}</div>
                    {/* <p className={styles.short}>{article.shortDesc}</p> */}
                    <div>{article.shortDesc}</div>


                    <div className={styles.infoSection} style={{width:"70%", justifyContent:"center"}}>
                        
                            <div>{`Posted by: ${article.postedBy.name} |`}</div>
                            <div>{` Created: ${formatDistanceToNow(article.created, {addSuffix: true})} |`}</div>
                       
                  
                            <div>{` LIKES: ${article.votes.length} |`}</div>
                            <div> 4 minutes read</div>
                  
                    </div>

                    <p className={styles.articleText} >{article.longDesc}</p>




                    <Comment.Group>
                        <Form reply>
                            <Form.TextArea placeholder="Add comment"
                                
                                value={commentText}
                                onChange={(event) => (setCommentText(event.target.value))} />
                            <Button content='Add comment!' onClick={handleComment} labelPosition='left' icon='edit' primary />
                        </Form>
                        <Header as='h3' dividing>
                            Comments
</Header>

                        {article.comments.map((comment, index) => {
                            return (
                                <Comment key={index}>
                                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>{comment.postedBy.name}</Comment.Author>
                                        <Comment.Metadata>
                                            <div>{comment.created}</div>
                                        </Comment.Metadata>
                                        <Comment.Text>{comment.text}</Comment.Text>
                                        <Comment.Actions>
                                            {/* <Comment.Action>Reply</Comment.Action> */}
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            )
                        })}

                    </Comment.Group>
                </div>
            </div>}
    </React.Fragment>
    )
}

export default Article;