import { useEffect, useState, useRef, createContext } from "react";
import fetchgames from "../services/apicall.js";

export const GameContext = createContext();

function GameData({ children }) {
  let [games, setGames] = useState([]);
  let [loading, setloading] = useState(true);
  let track = useRef(null);
  let [search, setSearch] = useState("");
  let [genres, setGenres] = useState({});
  let [platform, setPlatform] = useState({});
  let [order, setOrder] = useState({});
  let [page, setPage] = useState(1);
  let [genreslist, setGenreslist] = useState([]);
  let [filters, setFilter] = useState([]);

  function getGames() {
    console.log("apicalled");
    setloading(true);
    fetchgames
      .get("/games", {
        params: {
          search: search || undefined,
          genres: genres.slug || undefined,
          platforms: platform.id || undefined,
          ordering: order.value || undefined,
          page: page || undefined,
        },
      })
      .then((res) => {
        track.ifnextpageexist = res.data.next;
        setGames((prev) => {
          let mergearr = [...prev, ...res.data.results];
          let newarr = [];

          mergearr.forEach((ele) => {
            let isduplicate = newarr.some((ele2) => ele2.id == ele.id);
            if (!isduplicate) {
              newarr.push(ele);
            }
          });

          return newarr;
        });
      })
      .catch((err) => {
        console.log("error occured", err);
      })
      .finally(() => {
        setloading(false);
      });
  }

  useEffect(() => {
    console.log("useeffect getgamesdata");
    let id = setTimeout(() => {
      getGames();
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [search, genres, platform, order, page]);

  useEffect(() => {
    console.log("useeffect set games and page to start empty and 1");
    setGames([]);
    setPage(1);
  }, [search, genres, platform, order]);

  useEffect(() => {
    fetchgames
      .get("/genres")
      .then((res) => {
        setGenreslist(res.data.results);
      })
      .catch((err) => {
        console.log("error occured");
      });

    fetchgames
      .get("/platforms")
      .then((res) => {
        setFilter(res.data.results);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  }, []);
   
  return (
    <>
      <GameContext.Provider
        value={{
          setPage,
          setPlatform,
          setGenres,
          setSearch,
          setloading,
          setGenreslist,
          setFilter,
          setOrder,
          games,
          page,
          platform,
          genres,
          loading,
          track,
          genreslist,
          filters,
          order,
          search
        }}
      >
        {children}
      </GameContext.Provider>
    </>
  );
}

export default GameData;
