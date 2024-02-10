// condition rendering - allows you to control what get rendered in your application based on certain conditions
// eg- show,hide or change components

import UserGreeting from "./UserGreeting.jsx"


function App() {
  
  return(
    <> 
   <UserGreeting isLogged={true} username="Bhupesh"/>
    </>
  )
 
}

export default App
