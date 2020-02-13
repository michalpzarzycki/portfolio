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
            <div className={styles.rightSide}><Icon name={iconName} size={iconSize} color={iconColor}/></div>
        </div>
    )
}

export default Project