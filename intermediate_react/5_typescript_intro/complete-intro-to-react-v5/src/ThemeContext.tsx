import { createContext, useState, Dispatch, SetStateAction } from "react";

// A type parameter is made with the <> syntax below
// It tells context what we will give it, so we are saying we're giving you a string, and a function that doesn't
// return anything  // <[string, () => void]> //

const ThemeContext = createContext<[string, Dispatch<SetStateAction<string>>]>([
  "green",
  theme => theme
]);

export default ThemeContext;
