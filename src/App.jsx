import React from "react";
import  UserProvider from "./Context/ContextApi"
import Theme  from "./Context/Theme";

const App=()=>
{
  return(
    <UserProvider>
      <Theme></Theme>
    </UserProvider>
  )
}
export default App
  