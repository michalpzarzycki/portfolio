import React, { useEffect } from 'react'
import { Loader } from 'semantic-ui-react'

function Loading() {

    useEffect(()=>{
        console.log("LOADINg")
    }, [])
    return(
        <div style={{width:"100%", height:"100vh"}}>
        <Loader active inline='centered'  />
    </div>
    )
  
    
}

export default Loading;