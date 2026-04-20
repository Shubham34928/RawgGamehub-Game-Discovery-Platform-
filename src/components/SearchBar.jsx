import "../styles/searchbar.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "./GameData";


function SearchBar() {
  let navigate = useNavigate();
  let { setSearch, setloading,games} = useContext(GameContext);


  function handlekeydown(event) {

    if ((event.target.value.trim() || games.length==0 ) && event.key == "Enter" ) {
      setloading(true);
      setSearch(event.target.value);
      navigate("/");
    
    }

  }

  return (
    <>
      <div className="searchbox">
        <input
          placeholder="Search Games..."
          onKeyDown={handlekeydown}
          className="textbox"
        />
      </div>
    </>
  );
}

export default SearchBar;
