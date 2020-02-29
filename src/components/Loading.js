import React, { useEffect } from 'react'
import { Icon } from 'semantic-ui-react'

function Loading() {

    useEffect(()=>{
        console.log("LOADINg")
    }, [])
    return(
        <div style={{width:"100%", height:"90vh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <Icon loading size="massive" name="react" color="white"  />
        <p style={{fontSize:"40px", color:"blue"}}>Loading...</p>
    </div>
    )
  
    
}

export default Loading;