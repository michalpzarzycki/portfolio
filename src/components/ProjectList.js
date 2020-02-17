import React, { useEffect } from 'react'
import Project from './Project'
import styles from './ProjectList.module.css'


function ProjectList() {

    useEffect(() => (
        console.log("JESTEM")
    ), [])
    return(
        <div className={styles.mainDiv}>
<Project 
title="WeatherApp"
descrition="A simple WeatherApp created with OpenWeatherApi"
iconColor="blue"
iconName="react"
iconSize="huge"

/>
<Project 
title="RcruitmentApp"
descrition="Medium size App with forum, test and interiew question created with best developers in Poland"
iconColor="blue"
iconName="js"
iconSize="huge"

/>

<Project 
title="TYTUØ"
descrition="OPUS"
iconColor="blue"
iconName="css3 alternate"
iconSize="huge"

/>

    
        </div>
    )
}

export default ProjectList