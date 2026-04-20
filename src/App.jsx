import Home  from "./components/Home"

import GameDetailsPage from "./components/GameDetailsPage.jsx"

import {BrowserRouter,Route,Routes}  from "react-router-dom"

import Header from "./components/Header.jsx"
import GameData from "./components/GameData.jsx"

import "./App.css"
function App(){


  return(<>

   <GameData> 
     <BrowserRouter>
      <Header/>
    
    
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/games/:id" element={ <GameDetailsPage/>}/>

        </Routes>
    </BrowserRouter>
      
 
  

  </GameData>


 
 

  </>)



}

export default App