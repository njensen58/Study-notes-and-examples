import React from "react";
import { hydrate } from "react-dom";
import App from "./App.js";

// Any other browser-only things.

hydrate(<App />, document.getElementById("root"));

// Hydrate is a special function like render, and what it is saying is
// that it expects there to be mark up already in this place, just
// take over what is there, don't re-render it.
