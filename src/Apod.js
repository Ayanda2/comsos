import React, { useState, useEffect } from "react";
import request from "./request";
import axios from "./axios";
import "./Apod.css";

function Row({ tittle, fetchUrl }) {
  const [mars, setMars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);

      setMars(requests.data);
      return requests;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(mars);
  return (
    <div className="apod">
      <div className="box">
        <h1 className="apod__title">{mars.title}</h1>
        <p className="apod_explanation">{mars.explanation}</p>
        <img className="apod_image" src={mars.hdurl} alt={mars.media_type} />
      </div>
      {/* {mars.map((mars) => (
        <img src={mars.url} alt={mars.title} />
      ))} */}
    </div>
  );
}

export default Row;
