import React, {useContext} from 'react'
import {LanguageContext} from '../../App'
import {ReactComponent as Sunrise } from './svgs/Sunrise.svg'
import {ReactComponent as Es } from './svgs/es.svg'
import {ReactComponent as En } from './svgs/en.svg'





const Start = (props) => {

    const setEnglish = () => props.changeLanguage("EN")
    const setSpanish = () => props.changeLanguage("ES")
    

    const Lcontext = useContext(LanguageContext)

    return (
        <div className="start demo-height start-column">

        <div className="language-bar"> 
        <p className="top-left-name"> Mariano Ram</p>
        <Es className="language-icon es" id="ES" onClick={setSpanish} /> 
        <En className="language-icon en" id="EN" onClick={setEnglish} />



        </div>

        {
            Lcontext.language === "ES" ? 
            <div> 
                <div className="intro-text blur-down" > Hola, soy Mariano.</div>
                
                <div className="desc-text blur-down-d05"> Desarrollador Web full-stack. </div>
                <div className="last-desc-text blur-down-d10"> More filler text  </div>           
            </div>

        :
        <div> 
                <div className="intro-text blur-down" > Hi, I'm Mariano.</div>
                
                <div className="desc-text blur-down-d05"> Full-stack web developer. </div>
                <div className="last-desc-text blur-down-d10"> More filler text  </div>           
            </div>
        
        }


        <Sunrise className="start-image"/>

        </div>


 

  


    )

}



export default Start