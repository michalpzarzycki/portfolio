import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {

    return(
        <div className={styles.mainDiv}>
            <div className={styles.h1}>MY PORTFOLIO</div>
            <div className={styles.h2}>MICHAŁ ZARZYCKI</div>
            {/* <div  className={styles.welcomeSection}>
                <div className={styles.content}>
                <Link to="/">WELCOME!</Link>
                <p>A SHORT DESCRIPTION</p>
                </div>
            </div> */}
        </div>
    )
}

export default Home