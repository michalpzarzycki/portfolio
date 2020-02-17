import React from 'react'
import FirebaseContext from '../firebase/context'
import { Link, withRouter } from 'react-router-dom'
import { Icon, Item, Label, Image } from 'semantic-ui-react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
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
  
         <Item>
         <Item.Image src='https://as1.ftcdn.net/jpg/00/76/31/18/500_F_76311829_sT3gJDd0aBdx497WkO72gs9vjCl22N8l.jpg' />
   
         <Item.Content>
           <Item.Header as='a'>{article.title}</Item.Header>
           <Item.Meta>
             <span>{`Posted by: ${article.postedBy.name}`}</span>
           </Item.Meta>
           <Item.Description>{article.shortDesc}</Item.Description>
           <Item.Extra>
             <Label><Link to={`/article/${article.id}`}>Read more!</Link></Label>
             <Label  content={`Created ${formatDistanceToNow(article.created, { addSuffix: true })}`} />
             <Label icon='heart'  onClick={handleLikes} content={article.votes.length} />
           </Item.Extra>
         </Item.Content>
       </Item>
    )
}

export default withRouter(ArticleItem)