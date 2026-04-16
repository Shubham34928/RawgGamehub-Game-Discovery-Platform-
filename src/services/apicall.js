import axios from "axios"

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

 export const  fetchgames =axios.create({
   baseURL:"https://api.rawg.io/api",
   params:{
    
     key:API_KEY

   }

 })



 export function fetchgamedetails(setloading,setGame,id) {
   setloading(true);
   fetchgames
     .get(`/games/${id}`)
     .then((res) => {
       console.log("gamedetails", res);
       setGame(res.data);
     })
     .catch((err) => {
       console.log("error occured", err);
     })
     .finally(() => {
       setloading(false);
     });
 }

 export function fetchscreenshots(setloading, setScreenshot, id, games) {
   if (games.length == 0) {
     setloading(true);
     fetchgames
       .get(`/games/${id}/screenshots`)
       .then((res) => {
         console.log("screenshots", res);
         setScreenshot(res.data.results);
       })
       .catch((err) => {
         console.log("error occured", err);
       })
       .finally(() => {
         setloading(false);
       });

     return;
   }

   let data = games.filter((ele) => {
     return ele.id == id;
   });

   setScreenshot(data[0].short_screenshots);
   setloading(false);
 }

 export function fetchtrailer(setloading,setTrailer,id) {
   setloading(true);
   fetchgames
     .get(`/games/${id}/movies`)
     .then((res) => {
       console.log("Tailer", res);
       setTrailer(res.data.results);
     })
     .catch((err) => {
       console.log("error occured", err);
     })
     .finally(() => {
       setloading(false);
     });
 }

 
 export default fetchgames
