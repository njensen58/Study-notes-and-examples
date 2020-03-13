import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

// Using Lazy makes it so that the variable "Details" is now a placeholder component
// that will not load this code until later when Details is actually tried to be
// rendered for the first time.

// When parcel/webpack sees `lazy` it knows to take the imported code and split it into a
// separate bundle.
const Details = lazy(() => import("./Details.js"));
const SearchParams = lazy(() => import("./SearchParams.js"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        {/* 
          Suspense knows to show it's fallback prop until the loading data promise resolves.
          In this case it is waiting for the import of Details to resolve.
          Without suspense, the lazy loading of the Details page will load into the browser
          but fail to render to the DOM.
        */}
        <Suspense fallback={<h1>Loading Route...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
