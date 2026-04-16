import GameCard from "./GameCard";
import "../styles/GameGrid.css";

function GameGrid({ games, loading, page }) {
  console.log("games", games);

  return (
    <>
    
     
      <div>
        {loading && page == 1 ? (
          <div className="gamegrid">
            {Array.from({ length: 20 }).map((ele, index) => {
              return (
                <div className="skleton_gamecard " key={index}>
                  <div className="skleton_image"></div>
                  <div className="skleton_content"> </div>
                </div>
              );
            })}
          </div>
        ) : 
        
        (
          <div className="gamegrid">
            {games?.map((ele) => {
              return (
                <GameCard
                  image={ele.background_image}
                  key={ele.id}
                  cardId={ele.id}
                  name={ele.name}
                  platforms={ele.parent_platforms}
                  rating={ele.esrb_rating?.name}
                  ratingslug={ele.esrb_rating?.slug}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default GameGrid;
