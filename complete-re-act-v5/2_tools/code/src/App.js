import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Forrest",
      animal: "Dog",
      breed: "Catahoula/Hound"
    }),
    React.createElement(Pet, {
      name: "Rafa",
      animal: "Dog",
      breed: "Something?"
    }),
    React.createElement(Pet, {
      name: "Pandy",
      animal: "Cat",
      breed: "Mix"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
