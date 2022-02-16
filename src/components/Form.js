import { useState } from "react";
import Button from "./Button";

export function Form (){
    const [value, setValue,] = useState('')

function Submit (e){
     e.preventDefault()
    if (value){
    alert(value);  
    }
}
    return (
          <div className='formParent'>
              <form onSubmit={(e)=> Submit(e)} action="">
                  <input placeholder="text" className="input" onChange={(e)=> setValue(e.target.value)} value={value} type="text" />
                  <button className="button2">submit</button>
             </form>
        </div>
    )
}
 
            
        
       
    
