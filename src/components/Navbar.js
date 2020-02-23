import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import FirebaseContext from '../firebase/context'



export function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth)
    const [navClick, setNavCLick] = useState(false)
const { user, firebase } = React.useContext(FirebaseContext)
useEffect(()=>{
    let start = window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth)
        console.log("HEJ", window.innerWidth)
       
    })
    return () => {
        window.removeEventListener(start)
    }
},[])
    return(
        <div className={styles.mainDiv}>
            
     {console.log("SCREEN", window.screen.width)}
 
            <div className={isMobile<800 ? styles.mobileNav : styles.none}>
                <div className={styles.btn}
                 onClick={() => {
setNavCLick((prev) => !prev)
                 }}><Icon name={!navClick ? "arrow alternate circle down":"arrow alternate circle up" }/>{!navClick ? "EXPAND": "FOLD"}</div>
                <div className={navClick ?  styles.mobileNavDisplay : styles.none}>
                <Link onClick={() => {
setNavCLick((prev) => !prev)
                 }} to="/projects">My projects</Link>
                {user && <Link onClick={() => {
setNavCLick((prev) => !prev)
                 }} to="/addarticle">ADD ARTICLE</Link>}
               {user && <Link onClick={() => {
setNavCLick((prev) => !prev)
                 }} to="/adddev">ADD DEV</Link>}
               {user && <Link onClick={() => {
setNavCLick((prev) => !prev)
                 }} to="addproject">ADD PROJECT</Link>}
                <Link onClick={() => {
setNavCLick((prev) => !prev)
                 }} to="/articles">ARTICLES</Link>
              {user ? <div style={{color:"white", cursor:"pointer"}} onClick={() => firebase.logout()}>SIGN OUT</div> : <Link onClick={() => {
setNavCLick((prev) => !prev)
                 }} to="/login">LOGIN</Link>}  
                </div>
            </div>
            <div className={isMobile<800 ? styles.none : styles.logo}>
                <div className={styles.imageContainer}><img  className={styles.image} src="https://avatars2.githubusercontent.com/u/41584779?s=460&v=4"/></div>
            </div>
            <div className={isMobile<800 ? styles.none : styles.links}>
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

