import React from 'react'
import styles from './Project.module.css'
import { Icon } from 'semantic-ui-react'
function Project({title, descrition, iconName, iconSize, iconColor}) {
    return(
        <div className={styles.mainDiv}>
            <div className={styles.leftSide}>
                <div className={styles.title}>{title}</div>
                <div className={styles.descrition}>{descrition}</div>
            </div>
            <div className={styles.rightSide}>

                     <Icon circular inverted color='black'  name={iconName} size={iconSize} className={styles.border}/>
</div>

        </div>
    )
}

export default Project