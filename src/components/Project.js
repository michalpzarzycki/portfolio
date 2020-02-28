import React, { useEffect, useState } from 'react'
import styles from './Project.module.css'
import { Icon, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import ModalDev from './ModalDev'
function Project({ title, description, iconName, iconSize, iconColor, developers, loading, project }) {
    const {isStarted} = project;
useEffect(()=>{
    console.log("LOADING W PROJEKCIE", loading)
},[])
const DEV_INFO = {
    "Kinga" : {
        name:"Kinga Zawarczynska",
                avatar:'https://avatars0.githubusercontent.com/u/55411091?s=460&v=4',
            link:'https://github.com/Kinga-Zawarczynska?tab=overview&from=2020-01-01&to=2020-01-14'
    },
    "Mateusz": {
        name:"Mateusz Rostkowski",
               avatar: 'https://avatars0.githubusercontent.com/u/38006370?s=460&v=4',
               link:'https://github.com/MateuszRostkowski'
    } ,
    "Michał": {
        name:"Michał Zarzycki",
               avatar: 'https://avatars2.githubusercontent.com/u/41584779?s=460&v=4',
               link:'https://github.com/michalpzarzycki'
    },
    "Marysia": {
        name:"Michał Zarzycki",
               avatar: 'https://avatars2.githubusercontent.com/u/41584779?s=460&v=4',
               link:'https://github.com/michalpzarzycki'
    },
    "Robert": {
        name:"Michał Zarzycki",
               avatar: 'https://avatars2.githubusercontent.com/u/41584779?s=460&v=4',
               link:'https://github.com/michalpzarzycki'
    }  
}
const DEV_LENGTH = Object.keys(DEV_INFO).length



    return (<React.Fragment>
  
      <div className={styles.mainDiv}>
      {/* <div className={project.isStarted ? styles.none : styles.notStarted} >
      the project has not started yet
   </div> */}
        <div className={styles.leftSide}>
            <div className={styles.titleSection}>
    <div className={styles.title}><Link to={`/project/${project.id}`}>{title}</Link></div>
    
                <div className={styles.data}>data dodania i ostatniej modyfikacji</div>
            </div>
            {console.log("project", title)}
            <div className={styles.description}>{description}</div>
            <span className={styles.spanDevelopers}>Developed by: </span>
            <div className={styles.developers}>

                
                
                
                
                  
              

                {developers.map((developer) => {
                    return(
                           <div>
                        <ModalDev triger={
                        <div className={styles.modalDevDiv} >
                            <Image  size="tiny" src={DEV_INFO[developer].avatar} avatar className={styles.avatar}/>
                        <span>{DEV_INFO[developer].name}</span>
                        </div>} devInfo={DEV_INFO[developer]} devsLength={DEV_LENGTH}/>
                    </div>
                     
                    )
                   
                })}
      

        

                
            </div>
        </div>
        <div className={styles.rightSide}>

            <Icon circular inverted color='black' name={iconName} size={iconSize} className={styles.border} />
        </div>

    </div>

            </React.Fragment>)
}

export default Project