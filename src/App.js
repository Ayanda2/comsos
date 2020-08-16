import React from "react";
import Apod from "./Apod";
import request from "./request";

function App() {
  return (
    <div className="app">
      <Apod tittle="Apod" fetchUrl={request.fetchApod} />
    </div>
  );
}

export default App;
