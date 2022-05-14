import MemeForm from "./MemeForm"
import Meme from "./Meme"
import React from "react"


export default function Main(){
    
    const [formData, setFormData] = React.useState({})

    function handleChange(e){
        setFormData(prevState => (
            {...prevState, [e.target.name]: e.target.value}
        ))

    }

    console.log(formData)

    return(
        <main>
            <MemeForm onChange={handleChange}/>
            <Meme data={formData}/>
        </main>
    )
}