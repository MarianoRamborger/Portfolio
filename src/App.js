import React, {useState, useEffect} from 'react';
import './App.css';
import Start from './Sections//Start/Start'
import RprojectsDivider from './Sections/RecentProjects/RProjectsDivider'
import Rproject from './Sections/RecentProjects/RProject'
import Footer from './Sections/Footer/Footer'

import {Ping} from './Services/Ping'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
  //Link
} from "react-router-dom";

export const LanguageContext = React.createContext();




const App = () => {

  const [language, changeLanguage] = useState(navigator.language.includes("es") ? "ES" : "EN")

  
  useEffect(() =>{
    Ping()
  })

  
  return (
    
    <Router>
      <Switch>
      
        <Route>
        <React.Fragment>


            <LanguageContext.Provider value={{language, changeLanguage}}> 
            {/* Context union point */}

            <Start language={language} changeLanguage={changeLanguage}/>

            <RprojectsDivider />
              <Rproject template="orange" language={language}  />
              <Rproject template="red"  language={language}/>
              <Rproject template="blue"  language={language}/>

            <Footer language={language} />

            <div className="soil" 
              
            > </div>


            </LanguageContext.Provider>
          </React.Fragment>

        </Route>

      </Switch>
    </Router>


  )

}

export default App;
