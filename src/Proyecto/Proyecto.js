import React, {useState} from 'react'
import experiences from './proyectos-list'



const Proyecto = (props) => {

const [experience, displayExperience] = useState(false)


const handleDisplayExperience = () => {
    displayExperience(!experience)
}

const {projectId} = props

     
     return (
         
         <div className={props.classes}>
                 <div className={"project-image-container"}>

                    <img src={experiences[projectId].image} alt="Imagen del sitio web" className="project-pic"/>

                    <div className="overlay"> 

                    <button className={`${props.buttonClasses} `}> Visitar </button>

                    <button className={`${props.buttonClasses} `} onClick={handleDisplayExperience}> Experiencia </button>
            
            
                </div>
        </div>
            
                {
                    experience ? 
                    <div className="experience-div">   
                        <div > 
                            <h2 className={props.expClass}> {experiences[projectId].id} </h2>
                            <h4 className={props.expClass}> {experiences[projectId].desc }  </h4>
                            <h4 className={props.expClass}> {experiences[projectId].comment} </h4>
                        </div>
                       

                    </div>


                    :
                    null
                }  


            </div>
     )
   
  
  
    
   

}


export default Proyecto