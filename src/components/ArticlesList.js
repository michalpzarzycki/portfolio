import React, { useEffect, useState } from 'react'
import ArticleItem from './ArticleItem'
import FirebaseContext from '../firebase/context'
import { ItemGroup } from 'semantic-ui-react'
import styles from './ArticlesList.module.css'
import Loading from './Loading'

function ArticlesList(props) {
    const { user, firebase } = React.useContext(FirebaseContext);
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        firebase.db.collection('articles').onSnapshot((snapshot) => {
            const arts = snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setIsLoading(false);
            setArticles(arts);
        }
        )

    }, [])

    return (
        <div className={styles.mainDiv}>
            {isLoading ? <Loading /> : <ItemGroup divided>
                {articles.map((article, index) => {
                    console.log("article", article)
                    return (
                        <ArticleItem key={index} article={article} />
                    )
                })}
            </ItemGroup>}
        </div>
    )
}

export default ArticlesList