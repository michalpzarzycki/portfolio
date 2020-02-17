import React, { useEffect } from 'react'
import styles from './Project.module.css'
import { Icon, Image } from 'semantic-ui-react'
function Project({ title, descrition, iconName, iconSize, iconColor, developers }) {

const DEV_INFO = {
    "Kinga" : {
        name:"Kinga Zawarczynska",
                avatar:'https://avatars2.githubusercontent.com/u/41584779?s=460&v=4',
            link:''
    },
    "Mateusz": {
        name:"Mateusz Rostkowski",
               avatar: 'https://avatars2.githubusercontent.com/u/41584779?s=460&v=4',
               link:''
    } 
}

// const project ={
//     title:"RecruitmentApp",
//     icon:'react',
//     description:"RecruitmentApp description",
//     dates: {
//         create:"CRETED:",
//         lastChanges:"LAST CHANGES"
//     },
//     developers: [{
//         name:"Mateusz Rostkowski",
//         avatar: 'https://avatars2.githubusercontent.com/u/41584779?s=460&v=4',
//         link:''
//     },
//     {
//         name:"Michał Zarzycki",
//         avatar:'https://avatars2.githubusercontent.com/u/41584779?s=460&v=4',
//         link:''
//     },
//     {
//        
//     }]

// }



    return (
        
        <div className={styles.mainDiv}>
            <div className={styles.leftSide}>
                <div className={styles.titleSection}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.data}>data dodania i ostatniej modyfikacji</div>
                </div>
                <div className={styles.descrition}>{descrition}</div>
                <div className={styles.developers}>

                    <div  style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginRight:"10px"}}>
                    <Image  size="tiny" src='https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' avatar />
                        <span>Developed by: </span>
                    </div>

                    {developers.map((developer) => {
                        console.log("DEV", developer)
                        console.log("DEVINFO", DEV_INFO)
                        console.log("DEVKINGA", DEV_INFO[developer])
                        return(
                            <div  style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginRight:"10px"}}>
                            <Image  size="tiny" src={DEV_INFO[developer].avatar} avatar />
                            <span>KINGA</span>
                        </div>
                        )
                       
                    })}
                    {/* <div  style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginRight:"10px"}}>
                        <Image  size="tiny" src='https://avatars2.githubusercontent.com/u/41584779?s=460&v=4' avatar />
                        <span>Michał Zarzycki</span>
                    </div>
                    <div  style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginRight:"10px"}}>
                    <Image  size="tiny" src='https://avatars0.githubusercontent.com/u/55411091?s=460&v=4' avatar />
                        <span>Kinga Zawarczyńska</span>
                    </div>
                    <div  style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginRight:"10px"}}>
                    <Image size="tiny" src='https://avatars0.githubusercontent.com/u/38006370?s=460&v=4' avatar />
                        <span>Mateusz Rostkowski</span>
                    </div> */}

            

                    
                </div>
            </div>
            <div className={styles.rightSide}>

                <Icon circular inverted color='black' name={iconName} size={iconSize} className={styles.border} />
            </div>

        </div>
    )
}

export default Project