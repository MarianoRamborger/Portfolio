import React, {useContext} from 'react'

import {LanguageContext} from '../../App'


const RProjectDivider = (props) => {

    const LContext = useContext(LanguageContext)

    return (
        <div className="recent-projects-divider flex-row">



        <div className="proyectos-recientes">  <p> {LContext.language === "ES" ? "Proyectos recientes" : "Recent Projects"} </p>  </div>
      


        </div>
    )

}


export default RProjectDivider