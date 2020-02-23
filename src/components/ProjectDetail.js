import React, { useEffect, useState } from 'react'
import FirebaseContext from '../firebase/context';
import Loading from './Loading'
import styles from './ProjectDetail.module.css'
import { Icon } from 'semantic-ui-react'

const INIT_STATE = {
    title: "",
    description: "",
    featuresDone:[],
    link:""
}

function ProjectDetail(props) {
    const [isLoading, setIsLoading] = useState(true)
    const { user, firebase } = React.useContext(FirebaseContext);
    const [project, setProject] = useState({});

    useEffect(() => {
        const projectRef = firebase.db.collection('projects').doc(projectId);
        projectRef.get().then(doc => {
            setProject({ ...doc.data(), id: doc.id })
            setIsLoading(false)
            console.log("PRO",project)
        }
        )
    }, [])

    const projectId = props.match.params.projectId;


    return (<React.Fragment>
        {isLoading ? <Loading /> : <div className={styles.mainDiv}>
            <div className={styles.content}>
                <div className={styles.projectName}>{project.title}</div>
                <div className={styles.projectDescription}>{project.description}</div>
    <a href={project.link}>GITHUB LINK: {project.link}</a>
   {project.featuresDone.map((done)=>{
          return <div><Icon name="check" />{done}</div>
   })}
     {project.featuresInProgress.map((inProgress)=>{
          return <div><Icon loading name='spinner'/>{inProgress}</div>
   })}
            </div>

        </div>}
    </React.Fragment>


    )
}

export default ProjectDetail