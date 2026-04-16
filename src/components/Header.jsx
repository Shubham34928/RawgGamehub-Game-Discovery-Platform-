import SearchBar from "./SearchBar";

import {useNavigate } from "react-router-dom";
import "../styles/Header.css"
function Header() {
  
  let navigate = useNavigate();

  return (
    <div className="headercontainer">
      <div
        className="imageheader"
        onClick={() => {
          navigate(0);
        }}
      >
        <img src="/rawg.png" className="image" />
      </div>

      <SearchBar />

      
    </div>
  );
}

export default Header;
