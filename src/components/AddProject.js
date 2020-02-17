import React from 'react'
import useFormValidation from '../hooks/useFormValidation'
import styles from './AddArticle.module.css'
import FirebaseContext from '../firebase/context'
import { TextArea, Input, Button } from 'semantic-ui-react'


const INITIAL_STATE = {
    title:'',
    icon:'',
    description:'',
    dates: {},
    developers: []

}

function AddProject(props) {

    const { user, firebase } = React.useContext(FirebaseContext)
    const [inputs, setInputs] = React.useState([]);
    const [selectDev, setSelectDev] = React.useState([])
const { handleSubmit, handleChange, values } = useFormValidation(INITIAL_STATE, validateArticle, null,handleProjectCreate)
function validateArticle() {
    return 0;
}
function handleProjectCreate() {
    if(!user) {
        props.history.push('/login')
    } else {
        const { title, icon, description, dates, developers} = values;
        const newLink = {
            title,
            icon, 
            description,
            dates,
            developers: [...selectDev]

        }

        console.log("newPro",newLink)
        firebase.db.collection('projects').add(newLink);
    }
}
    return(
        <div className={styles.mainDiv}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input 
            name="title" 
            type="text" 
            placeholder="Enter the title"
            autoComplete="off"
            onChange={handleChange}
            value={values.title} />
            <Input 
            name="icon"
             type="text"
              placeholder="Icon name"
              autoComplete="off"
              onChange={handleChange}
              value={values.icon} />
            <TextArea name="description" style={{overflow:"auto", resize:"none"}} placeholder=" description" onChange={handleChange} value={values.description} autoComplete="off"/>
           <Button type="button" 
           onClick={() => {
               const newSelect = selectDev.concat(   <select 
                name="developers" onChange={(e) => {
                    console.log("SEL", [e.target.name], e.target.value)
                  
                    console.log("ARR DEV", selectDev)
                }} 
                onChange={(e) => {
                    const arrDev = [...selectDev, e.target.value]
                    setSelectDev(arrDev)
                } }
                >
                <option>___CHOOSE DEV___</option>
                <option value="Michał">Michał Zarzycki</option>
                <option value="Kinga">Kinga Zawarczynska</option>
                <option value="Mateusz">Mateusz Rostkowski</option>
            </select>);
            console.log("SELECTED", values.developers )
            setSelectDev(newSelect)
        

           }}>ADD DEVELOPER FROM DATABASE</Button>
         {selectDev.map(dev => {return <p style={{background:"black", color:"white"}}>SELECTED DEVS: {dev}</p>})}
           <Button type="button" onClick={() => {
              const newInput = inputs.concat(<input />)
              setInputs(newInput)
           }}>Add developer</Button>
         {inputs.map((input, index) => {
         return( 
             <React.Fragment>

                <h1>DEVELOPER #{index+1}</h1>
<input type="text" placeholder="Developer name"  onChange={handleChange}
            value={values.developers.name}/>
<input type="text" placeholder="avatar"  onChange={handleChange}
            value={values.developers.avatar}/>
<input type="text" placeholder="Github Url"  onChange={handleChange}
            value={values.developers.link}/>
             </React.Fragment>
         )
         })}           
            <Button secondary type="submit">ADD PROJECT</Button>
            
        </form>
        </div>
    )
}

export default AddProject