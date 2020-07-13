import React, {useState, useEffect} from 'react';
import './App.css';
import Start from './Sections//Start/Start'
import RprojectsDivider from './Sections/RecentProjects/RProjectsDivider'
import Rproject from './Sections/RecentProjects/RProject'
import Footer from './Sections/Footer/Footer'
import {Ping} from './Services/Ping'


export const LanguageContext = React.createContext();




const App = () => {

  const [language, changeLanguage] = useState(  navigator.language.includes("es") ? "ES" : "EN")

  const handleLanguage = (language) => {
    changeLanguage("english")
  }

  useEffect(() =>{
    Ping()
  })

    console.log(language)
  
  return (
    
    <React.Fragment>

      <LanguageContext.Provider value={{language, changeLanguage}}> 
      {/* Context union point */}

      <Start language={language}/>

      <RprojectsDivider />
        <Rproject template="orange" language={language}  />
        <Rproject template="red"  language={language}/>
        <Rproject template="blue"  language={language}/>

      <Footer language={language} />

      <div className="soil" 
        onClick={handleLanguage} // This be here just to deploy
      > </div>


      </LanguageContext.Provider>
    </React.Fragment>


  )

}

export default App;
