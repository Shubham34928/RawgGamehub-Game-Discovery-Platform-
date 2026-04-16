


import { useEffect,useState  } from "react";
import  "../styles/Genres.css"




function Genres({genres ,setGenres,setloading,genreslist}){


  function handleclick(ele) {
    setloading(true);
    setGenres({ id: ele.id, slug: ele.slug, name: ele.name });
  }




 
  return (
    <>
     <div className="sidebar">
       <h3 className="genretitle">Genres</h3>
      <div>
        {genreslist?.map((ele) => {
          return (
            <div className="genres_card" key={ele.id}>
              <div className="genresimagesection">
                <img className="genresimage" src={ele.image_background} />
              </div>
              <div
                className={
                  genres?.id === ele.id
                    ? "genrestextsection_active"
                    : "genrestextsection"
                }
                onClick={() => {
                  handleclick(ele);
                }}
              >
                <p>{ele.name}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
     
     
    </>
  );
}

export default Genres;