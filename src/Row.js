import React, { useState, useEffect } from "react";
import request from "./request";
import axios from "./axios";

function Row({ tittle, fetchUrl }) {
  const [mars, setMars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);

      console.log(requests);
    }
    fetchData();
  }, [fetchUrl]);

  return <div></div>;
}

export default Row;
