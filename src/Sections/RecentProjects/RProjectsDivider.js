import React, {useContext} from 'react'
import {ReactComponent as Forest } from './Svgs/Forest2.svg'
import {ReactComponent as MiddaySun} from './Svgs/MiddaySun.svg'


import {LanguageContext} from '../../App'


const RProjectDivider = (props) => {

    const LContext = useContext(LanguageContext)

    return (
        <div className="recent-projects-divider flex-row">

        <Forest className="divider-prev-svg"/>

        <div className="proyectos-recientes">  <p> {LContext.language === "ES" ? "Proyectos recientes" : "Recent Projects"} </p>  </div>
      

        <MiddaySun className="divider-post-svg "/>

        </div>
    )

}


export default RProjectDivider