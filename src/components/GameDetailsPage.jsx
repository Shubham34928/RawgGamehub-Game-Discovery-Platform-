import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import "../styles/GameDetailsPage.css";
import { fetchgamedetails,fetchscreenshots,fetchtrailer } from "../services/apicall.js";
import GameTrailer from "./GameTrailer.jsx";
import ScreensSection from "./ScreensSection.jsx";
import GameInfoSection from "./GameInfoSection.jsx";
import { useContext } from "react";
import { GameContext } from "./GameData.jsx";


function GameDetailsPage() {
  let { id } = useParams();
  let navigate = useNavigate();
  let [game, setGame] = useState([]);
  let [screenshot, setScreenshot] = useState([]);
  let [trailer, setTrailer] = useState([]);
  let [loading, setloading] = useState(true);
  let [preview, setPreview] = useState("");
  let [previewtoggle, setPreviewtoggle] = useState(false);
  
  let{games} =useContext(GameContext);
 
  useEffect(() => {
    fetchgamedetails(setloading,setGame,id);
    fetchscreenshots(setloading,setScreenshot,id,games);
    fetchtrailer(setloading,setTrailer,id );

  }, []);



  console.log(screenshot)
  return (
   
   
    <div className="detailspage">
    
      <div className="backbutton">
        <button
          onClick={() => {
            navigate(-1) || navigate("/");
          }}
        >
          Back
        </button>
      </div>

      <div className="detailsContainer">
        {!loading ? (
          <GameInfoSection game={game} />
        ) : (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        )}

        <div>
          {!loading ? (
            <GameTrailer trailer={trailer} />
          ) : (
            <>
              <div className="loadingtrailer">
                <div className="spinner"></div>
              </div>
            </>
          )}

          {!loading ? (
            <ScreensSection
              screenshot={screenshot}
              setPreview={setPreview}
              setPreviewtoggle={setPreviewtoggle}
            />
          ) : (
            <>
              <p className="loadingscreens">Loading Screenshots...</p>
            </>
          )}
        </div>
      </div>


      {previewtoggle && (
        <div className="preview">
         <IoMdCloseCircle className="button" 
            onClick={() => {
              setPreviewtoggle(false);
            }}
          
         />
          <img src={preview} />
        </div>
      )}
    </div>
  );
}

export default GameDetailsPage;
