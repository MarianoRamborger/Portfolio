import React from 'react'
import {ReactComponent as Forest } from './Svgs/Forest2.svg'
import {ReactComponent as MiddaySun} from './Svgs/MiddaySun.svg'

const RProjectDivider = (props) => {

    return (
        <div className="recent-projects-divider flex-row">

        <Forest className="divider-prev-svg"/>

        <div className="proyectos-recientes">  <p> Proyectos  Recientes </p>  </div>
      

        <MiddaySun className="divider-post-svg"/>

        </div>
    )

}


export default RProjectDivider