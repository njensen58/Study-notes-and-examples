const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));