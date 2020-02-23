import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import FirebaseContext from '../firebase/context'



function Navbar() {
const { user, firebase } = React.useContext(FirebaseContext)
console.log("USEEER", user)
    return(
        <div className={styles.mainDiv}>
            <div className={styles.logo}>
                <div className={styles.imageContainer}><img  className={styles.image} src="https://avatars2.githubusercontent.com/u/41584779?s=460&v=4"/></div>
            </div>
            <div className={styles.links}>
                <Link to="/projects">My projects</Link>
                {user && <Link to="/addarticle">ADD ARTICLE</Link>}
               {user && <Link to="/adddev">ADD DEV</Link>}
               {user && <Link to="addproject">ADD PROJECT</Link>}
                <Link to="/articles">ARTICLES</Link>
              {user ? <div style={{color:"white", cursor:"pointer"}} onClick={() => firebase.logout()}>SIGN OUT</div> : <Link to="/login">LOGIN</Link>}  
            </div>
        </div>
    )
}

export default Navbar