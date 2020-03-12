# Class Components

  * To show another valid way to write react/

  * To enable short hand state declaration syntax, such as:
    - state = { loading: true },
    You have to enable the class properties propsal for babel.
    `npm i -D babel-esling @babel/core @babel/preset-env @babelplugin-proposal-class-properties @babel/preset-react`
  * Parcel has their own babel config, but allows you to overrwite and customize it for 
    circumstances like this where we want to enable something it doesn't include.
    - We do this by creating a `.babelrc` file and settings the presets/plugins from the
      installations.
  * To make parcel accept the overrides in the `.babelrc` file, we have 
    to add a parser option to the `.eslintrc.json` file.