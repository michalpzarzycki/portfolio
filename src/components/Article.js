import React from 'react'
import styles from './Article.module.css'

function Article() {
console.log("HEJJJJ")
    return(
        <div className={styles.mainDiv}>
            <h1 className={styles.title}>TYTUŁ</h1>
            <p className={styles.short}>SHORT DESCRIPTION</p>

            <div className={styles.infoSection}>
                <div className={styles.who}>
                    <div>kto:</div>
                    <div>kiedy</div>
                </div>
                <div className={styles.likes}>
                    <div>LAJKI:</div>
                    <div>ile czytania:</div>
                    </div>
            </div>

            <p>LOONG DESC</p>

            <div>COMMENTS</div>

            <div>ADD COMMENT</div>

        </div>
    )
}


export default Article;