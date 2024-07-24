import {createContext} from "react";

export let ThemeContext=createContext()

let Theme={
    Dark:{
        background:"#7733FF"
    },

    Light:{
        background:"#FF5533"
    }
}

const UserProvider=({Children})=>
{
    return <ThemeContext.Provider value={Theme}>
        {Children}
    </ThemeContext.Provider>
}

export default UserProvider