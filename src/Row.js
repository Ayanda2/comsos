import React, { useState, useEffect } from "react";
import request from "./request";
import axios from "./axios";

function Row({ tittle, fetchUrl }) {
  const [mars, setMars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);

      setMars(requests.data.photos);
      return requests;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(mars);
  return (
    <div className="mars_pic">
      {mars.map((mars) => (
        <img src={mars.img_src} alt={mars.camera} />
      ))}
    </div>
  );
}

export default Row;
