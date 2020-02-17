import React, { useEffect, useState } from 'react'
import Project from './Project'
import styles from './ProjectList.module.css'
import firebase from '../firebase/firebase'
// const INITIAL_STATE = {
//     description:"abcd"
// }

function ProjectList() {
const [projects, setProjects] = useState([])
    useEffect(() => {
        firebase.db.collection('projects').onSnapshot((snapshot) => {
         const pro = snapshot.docs.map(doc => {
             console.log("DOC DATA", doc.data())
                return { id:doc.id, ...doc.data()}

            })
            console.log("PRO", pro)

            
           setProjects(pro)
           console.log("PROJECTS ", projects)
           }
        )
        
    }, [])
    return(
        <div className={styles.mainDiv}>
            {projects.map((project, index)=>{
                console.log("ORIGUT", project)
                return(
                    <Project 
                    title={project.title}
                    descrition={projects.description}
                    iconColor="blue"
                    iconName={project.icon}
                    iconSize="huge"
                    developers={project.developers}
                    
                    
                    />
                )
            })}


    
        </div>
    )
}

export default ProjectList