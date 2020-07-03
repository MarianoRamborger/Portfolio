import React, {useState} from 'react'



const Proyecto = (props) => {

const [initial, changeInitial]=useState(true)
const [MouseIn, MouseIO] = useState(false)


 const MouseEnters = () => {
     MouseIO(true)
   
 }
 const MouseLeaves = () => {
    MouseIO(false)
}
 const handleChangeInitial = () =>{
     changeInitial(false)
     MouseIO(true)
 }

    if (initial) {
        return  <div onMouseEnter={handleChangeInitial}  className={props.classes}> </div>      
    }
  
  
    else {
        return (
            <div onMouseEnter={MouseEnters} onMouseLeave={MouseLeaves} className={props.classes}> 
            

            {
                //Escencialmente iguales, con animaciones de entrada y salidas opuestas
             MouseIn ?               
             <div className="proyecto-overlay scale-in-ver-top"> 
             <button className={props.buttonClasses}> Visitar </button>
             <button className={props.buttonClasses}> Reflexiones </button>
             
             </div>     
             :
             <div className="proyecto-overlay scale-out-ver-top"> 
             <button className={props.buttonClasses}> Visitar </button>
             <button className={props.buttonClasses}> Reflexiones </button>

             </div>       
            } 
           
            
            </div>
     )
    }
   

}


export default Proyecto