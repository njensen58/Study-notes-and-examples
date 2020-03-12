import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Forrest" animal="Dog" breed="Catahoula/Hound" />
      <Pet name="Rafa" animal="Dog" breed="Something?" />
      <Pet name="Pandy" animal="Cat" breed="Mix" />
    </div>
  );
};

render(<App/>, document.getElementById("root"));