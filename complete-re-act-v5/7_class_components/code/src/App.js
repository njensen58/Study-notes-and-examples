import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet.js";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams.js";
import Details from "./Details.js";
// allows of async-await config for browserlist in package.json
import "regenerator-runtime/runtime";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
