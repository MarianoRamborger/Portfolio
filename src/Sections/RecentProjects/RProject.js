import React from 'react'


import {ReactComponent as Sunset} from './Svgs/Sunset.svg'
import {ReactComponent as Bird} from './Svgs/Bird.svg'
import {ReactComponent as Grass} from './Svgs/Grass.svg'
import Proyecto from '../../Proyecto/Proyecto.js'
import GitHubIcon from '@material-ui/icons/GitHub';



const RProject = (props) => {


    if (props.template === "orange" ) {
        return (
            <div className="recent-project flex-row project-1">

                <a href="https://github.com/MarianoRamborger/Criadero" target="blank" className="github-icon-a"> <GitHubIcon className="recent-project-prev-svg github-icon Yellow"/> </a>

                <div className="proyectos-recientes">  
                
                     <Proyecto classes={"proyecto"} buttonClasses={"proyecto-button button-orange"} projectId={0} expClass={"experience-text"}/>
                     {/* projecto y proyecto-button son las must-pass */}
                </div>   
               
                <Sunset className="recent-project-post-svg Red"/>  
            </div>
        )        
    } 

    else if (props.template === "red") {
        return(

        <div className="recent-project flex-row project-2">

            <a href="https://github.com/MarianoRamborger/YayTa" target="blank" className="github-icon-a">  <GitHubIcon className="recent-project-prev-svg github-icon Orange"/> </a>

            <div className="proyectos-recientes">  
                
                <Proyecto classes={"proyecto"} buttonClasses={"proyecto-button button-orangered"} projectId={1} expClass={"experience-text"}/>
               
                {/* projecto y proyecto-button son las must-pass */}
           </div>          
            
            <Bird className="recent-project-post-svg project-1-post-svg Blue mirror"/>  
        </div>      
        )
    }

    else if (props.template === "blue") {
        return(
        <div className="recent-project flex-row project-3">

             <a href="https://github.com/MarianoRamborger/Metodos" target="blank" className="github-icon-a"> <GitHubIcon className="recent-project-prev-svg github-icon Red"/> </a>
           

            <div className="proyectos-recientes">  
                
                    <Proyecto classes={"proyecto"} buttonClasses={"proyecto-button button-blue"} projectId={2} expClass={"experience-text"}/>
                    {/* projecto y proyecto-button son las must-pass */}
              </div>   

            <Grass className="recent-project-post-svg"/>  
        </div>      
        )
    }



  else return null
 
}

export default RProject