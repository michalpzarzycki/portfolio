import React from 'react'
import { Input, TextArea, Button } from 'semantic-ui-react'

function AddDev() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e)
    }
    return(
        <form onSubmit={handleSubmit} style={{width:"100%", height:"90vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>  
           
            <Input type="text" placeholder="Dev's name"/>
            <Input type="text" placeholder="Github link"/>
            <Input type="text" placeholder="Avatar URL" />
            <TextArea type="text" placeholder="Dev's description"/>
            <Button type="submit" onClick={()=>{console.log("CLICK")}}>ADD DEV</Button>
            </form>
            
    )
}

export default AddDev