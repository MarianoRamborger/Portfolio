import React, {useState, useContext} from 'react'
import {LanguageContext} from '../App'

import experiencias from './proyectos-list'
import experiences from './projects-list'
import {ReactComponent as MiddaySun} from '../Sections/RecentProjects/Svgs/MiddaySun.svg'
import {ReactComponent as Sunset} from '../Sections/RecentProjects/Svgs/Sunset.svg'
import {ReactComponent as Grass} from '../Sections/RecentProjects/Svgs/Grass.svg'

// import Axios from 'axios'

const Proyecto = (props) => {


const [experience, displayExperience] = useState(false)
const LContext = useContext(LanguageContext)

const handleDisplayExperience = () => {
    displayExperience(!experience)
}

const {projectId} = props

    
// useEffect(() => {
    

// }, [])


     
     return (
         
         <div className={props.classes}>
                 <div className={"project-image-container"}>

                    {
                        experiences[projectId].video ? 
                        <video autoPlay loop muted className="project-pic"> 
                        <source src={require(`${experiences[projectId].image}`)} type="video/mp4" />

                        </video>
                        :
                        <img src={experiences[projectId].image} alt="Imagen del sitio web" className="project-pic"/>

                    }
                   

                    <div className="overlay"> 

                    <a href={experiences[projectId].link} className={`${props.buttonClasses} `}> {LContext.language === "ES" ? "Visitar" : "Visit"   } </a>

                    <button className={`${props.buttonClasses} `} onClick={handleDisplayExperience}> {LContext.language === "ES" ? "Experiencia" : "Experience"   } </button>
            
                 
                </div>
                
        </div>
            
                {
                    experience ?
                        LContext.language === "ES" ? 


                        <div className="experience-div">   
                            <div > 
                                <h2 className={props.expClass}> {experiencias[projectId].id} </h2>
                                <h4 className={props.expClass}> {experiencias[projectId].desc }  </h4>
                                <h4 className={props.expClass}> {experiencias[projectId].comment} </h4>
                            </div>
                        </div>


                        :
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

                <div className="post-svg-div">
                
                {
                    props.displayNumber === 0 && <MiddaySun className="post-svg Red"/>
                }
                {
                    props.displayNumber === 1 && <Sunset className="post-svg Blue"/>
                }
                {
                    props.displayNumber === 2 && <Grass className="post-svg "/>
                }
                </div>
     
            </div>
     )
   
  
  
    
   

}


export default Proyecto