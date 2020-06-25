import React from 'react'
import {ReactComponent as SunFlower} from './Svgs/Sunflower.svg'

import {ReactComponent as Sunset} from './Svgs/Sunset.svg'
import {ReactComponent as Orange} from './Svgs/Orange.svg'
import {ReactComponent as Bird} from './Svgs/Bird.svg'
import {ReactComponent as Owl} from './Svgs/Owl.svg'
import {ReactComponent as Grass} from './Svgs/Grass.svg'


const RProject = (props) => {

    //Vos maybe como column

    if (props.template === "orange" ) {
        return (
            <div className="recent-project flex-row project-1 demo-height">

                <SunFlower className="recent-project-prev-svg Yellow mirror-reverse"/> 

                <div className="proyectos-recientes">  <p>  </p>  </div>   
               
                <Sunset className="recent-project-post-svg Red"/>  
            </div>
        )        
    } 

    else if (props.template === "red") {
        return(

        <div className="recent-project flex-row project-2 demo-height">

            <Orange className="recent-project-prev-svg project-1-pre-svg Orange reverse"/> 

            <div className="proyectos-recientes">  <p>  </p>  </div>   
            
            <Bird className="recent-project-post-svg project-1-post-svg Blue mirror"/>  
        </div>      
        )
    }

    else if (props.template === "blue") {
        return(
        <div className="recent-project flex-row project-3 demo-height">

        <Owl className="recent-project-prev-svg Red reverse left"/> 

        <div className="proyectos-recientes">  <p>  </p>  </div>   

        <Grass className="recent-project-post-svg"/>  
        </div>      
        )
    }



  else return null
 
}

export default RProject