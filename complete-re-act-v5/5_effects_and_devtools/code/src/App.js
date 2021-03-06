import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet.js";
import SearchParams from "./SearchParams.js"

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

render(<App/>, document.getElementById("root"));