import React, {useContext, useRef, useState} from 'recat'
import { ThemeContext } from './ContextApi'

const Theme=()=>
{
    let [state, setState]=useState(false)

    let{Dark,Light}=useContext(ThemeContext)

    let ChangeRef=useRef()

    let handleChange=()=>{
        setState(!state)

        if(state===false)
        {
            ChangeRef.current.style.background=Dark.background
        }
        else{
            ChangeRef.current.style.background=Light.background
        }
    }

    return(
        <div>
            <h1 ref={ChangeRef}>I AM THE THEME CHANGER</h1>
            <button onClick={handleChange}>{state ? "Dark" :"Light"}</button>
        </div>
    )
}
export default Theme

        
    
