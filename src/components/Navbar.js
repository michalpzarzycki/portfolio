import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'


function Navbar() {

    return(
        <div className={styles.mainDiv}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.links}>
                <Link to="/">PIERWSZY</Link>
                <Link to="/">PIERWSZY</Link>
                <Link to="/articles">ARTICLES</Link>
                <Link to="/login">LOGIN</Link>
            </div>
        </div>
    )
}

export default Navbar