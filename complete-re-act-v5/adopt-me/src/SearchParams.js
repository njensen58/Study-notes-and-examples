import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown.js";
import Results from "./Results.js";
import ThemeContext from "./ThemeContext.js";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    try {
      const { animals } = await pet.animals({
        location,
        breed,
        type: animal
      });

      setPets(animals || []);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet
      .breeds(animal)
      .then(({ breeds }) => {
        const breedStrings = breeds.map(({ name }) => name);
        setBreeds(breedStrings);
      })
      .catch(err => console.log(err));
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        {/*
          We didn't use the dropdown hook for the theme 
          because we are using the setTheme hook already.
          ThemeHook lives in App so its state persists as
          app never unmounts.
        */}
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="orchid">Orchid</option>
            <option value="cornflowerblue">Cornflowerblue</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;