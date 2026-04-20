import "../styles/searchbar.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GameContext } from "./GameData";


function SearchBar() {
  let navigate = useNavigate();
  let { setSearch, setloading,games} = useContext(GameContext);
   
  let[input,setInput]=useState("");

  function handlesubmit(event) {
    event.preventDefault();
    if ((input.trim() || games.length==0 )) {
      setloading(true);
      setSearch(input);
      navigate("/");
    
    }

  }


  function handlechange(event){

  setInput(event.target.value)


  }


  return (
    <>
   

      <form onSubmit={handlesubmit} className="searchbox">
          <input
           placeholder="Search Games..."
           className="textbox"
           value={input}
           onChange={handlechange}
        />
  
      </form>
      
   
    </>
  );
}

export default SearchBar;
