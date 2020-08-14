import React from "react";
import Row from "./Row";
import request from "./request";

function App() {
  return (
    <div className="app">
      <h1>hello</h1>
      <Row tittle="Rover pics " fetchUrl={request.fetchMarsPhotos} />
      {/* <Row tittle="topic " fetchUrl={request.fetchDailytopic} /> */}
    </div>
  );
}

export default App;
