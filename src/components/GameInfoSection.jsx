import "../styles/GameinfoSection.css";
import { useState } from "react";


function GameInfoSection({game}) {
let[toggle,setToggle]=useState(true)


  return (
    <div>
{game.description_raw && 
      <div className="about">
        <p className="heading">{game.name}</p>
        <p className={`description ${toggle && "description_toggle"}`}>
          {game.description_raw}
        </p>

        <button
          className="description_button"
          onClick={() => {
            setToggle((prev) => !prev);
          }}>show {toggle ? "more" : "less"}
        </button>
      </div>
      
}

{game.parent_platforms && 
      <div className="additionalinfo">
        <div>
          <h3>Platforms</h3>

          {game.parent_platforms?.map((ele, index) => {
            return (
              <p key={index} className="aboutdetails">
                {ele.platform.name}
              </p>
            );
          })}
        </div>

        <div>
          <h3>Metascore</h3>
          <p className="score">{game.metacritic || "NA"}</p>
        </div>

        <div>
          <h3>Genres</h3>
          {game.genres?.map((ele, index) => {
            return (
              <p key={index} className="aboutdetails">
                {ele.name}
              </p>
            );
          })}
        </div>
        <div>
          <h3>Publishers</h3>
          {game.publishers?.map((ele, index) => {
            return (
              <p key={index} className="aboutdetails">
                {ele.name}
              </p>
            );
          })}
        </div>
      </div>
      
}

    </div>
  );
}

export default GameInfoSection;
