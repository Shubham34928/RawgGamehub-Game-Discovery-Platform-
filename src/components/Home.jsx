import { useEffect, useState, useRef } from "react";
import GameGrid from "./GameGrid.jsx";
import Filters from "./Filters.jsx";
import Genres from "./Genres.jsx";
import "../styles/Home.css";
import { useContext } from "react";
import { GameContext } from "./GameData.jsx";
function Home() {
  let {
    setPage,
    setPlatform,
    setGenres,
    setloading,
    setOrder,
    setFilter,
    games,
    page,
    platform,
    genres,
    loading,
    track,
    genreslist,
    filters,
    order,
  } = useContext(GameContext);

  useEffect(() => {
    console.log("useeffect intersection observer");
    let watch = new IntersectionObserver(
      (ele) => {
        if (ele[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.5 },
    );
    track.current && watch.observe(track.current);

    return () => watch.disconnect();
  }, [loading]);

  return (
    <>
   
      <div className="home">
        <Genres
          genres={genres}
          setGenres={setGenres}
          setloading={setloading}
          genreslist={genreslist}
        />
        <div className="maincontainer">
          <h2 className="gridheadline">
            {platform.name} {genres.name} Games
          </h2>
          <Filters
            setPlatform={setPlatform}
            setloading={setloading}
            setOrder={setOrder}
            order={order}
            setFilter={setFilter}
            filters={filters}
            platform={platform}
            setGenres={setGenres}
            genres={genres}
            page={page}
            setPage={setPage}
          />

          <GameGrid
            games={games}
            genres={genres}
            loading={loading}
            page={page}
          />
          {track.ifnextpageexist && (
            <div ref={track} className="loading">
              <div className="spinner"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
