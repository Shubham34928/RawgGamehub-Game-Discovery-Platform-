

import { useEffect } from "react";
import "../styles/Filters.css";
import { RiResetLeftLine } from "react-icons/ri";
function Filters({ setPlatform, setloading, setOrder, filters,platform,order,setGenres,genres,page}) {
  const sortgames = [
    { name: "Relevance", value: "" ,id:123},
    { name: "Date Added", value: "added" ,id:545},
    { name: "Release Date", value: "-released" ,id:256},
    { name: "Popularity", value: "-metacritic",id:786 },
    { name: "Average Rating", value: "-rating" ,id:985},
  ];

  function handleplatformChange(event) {
    const selected = filters.find((ele) => {
      return ele.id == event.target.value;
    });
    setloading(true);
    setPlatform(selected);
  }

  function handleorderchange(event) {
    const selected = sortgames.find((ele) => {
      return ele.id == event.target.value;
    });
  
    setloading(true);
    setOrder(selected);
  }
  

  function handleReset() {
    console.log("order", order, "platform", platform);

    if (
      Object.keys(order).length != 0 ||
      Object.keys(platform).length != 0 ||
      Object.keys(genres).length != 0
    ) {
      setPlatform({});
      setOrder({});
      setGenres({});
    }
  }


  return (
    <div className="filters">
      <div>
        <select
          onChange={handleplatformChange}
          value=""
          className="platformselect"
          selected
        >
          <option value="" disabled hidden>
            {platform.name || "Platforms"}
          </option>
          {filters.map((ele) => {
            return (
              <option key={ele.id} value={ele.id}>
                {ele.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <select
          onChange={handleorderchange}
          value =""
          className="orderselect"
        >
          <option value="" disabled hidden>
            {order.name?`Order By : ${order.name}`: "Order By"}
          </option>
          {sortgames.map((ele, index) => {
            return (
              <option key={ele.id} value={ele.id}>
                {ele.name}
              </option>
            );
          })}
        </select>
      </div>

      <RiResetLeftLine onClick={handleReset}
        className="resetbutton"
      />
      <div>
        {Array.from({length:5}).map(()=>{
        
         <p>hello</p>

        })}

      </div>

    </div>
  );
}

export default Filters;
