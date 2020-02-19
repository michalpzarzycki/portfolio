import React, { useEffect, useState } from 'react'
import FirebaseContext from '../firebase/context';
import Loading from './Loading'
const INIT_STATE = {
    title:"",
    description:""
}
function ProjectDetail(props) {
    const [isLoading, setIsLoading] = useState(true)
    const {user, firebase} = React.useContext(FirebaseContext);
const [project, setProject] = useState({});
useEffect(()=>{
    console.log("ID",projectId)
    const projectRef = firebase.db.collection('projects').doc(projectId);
    projectRef.get().then(doc => {
        setProject({ ...doc.data(), id: doc.id })
       setIsLoading(false)
        console.log("project", projectRef)
    }
    )
},[])

const projectId = props.match.params.projectId;


    return(<React.Fragment>
         {isLoading ? <Loading /> :   <div style={{width:"100%", height:"90vh", justifyContent:"center", alignItems:"center", background:"white"}}>
        <div>PROJECT NAME: {project.title}</div>
    <div>DESCRIPTION: {project.description}</div>
        </div>}
    </React.Fragment>
       
  
    )
}

export default ProjectDetail