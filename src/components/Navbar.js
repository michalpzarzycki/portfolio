import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import FirebaseContext from '../firebase/context'



function Navbar() {
const { user, firebase } = React.useContext(FirebaseContext)
console.log("USEEER", user)
    return(
        <div className={styles.mainDiv}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.links}>
                <Link to="/">PIERWSZY</Link>
                <Link to="/addarticle">ADD ARTICLE</Link>
                <Link to="/articles">ARTICLES</Link>
              {user ? <div onClick={() => firebase.logout()}>WYLOGUJ</div> : <Link to="/login">LOGIN</Link>}  
            </div>
        </div>
    )
}

export default Navbar