# Time to convert our React.createElement calls to JSX

  * Parcel has babel built into it, so it can parse our JSX.
  * You can add `"react/recommended"` as an eslint plugin, but for more coverage you
    install:
    * `npm i -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`
      * `babel-eslint`: allows eslint ot be augmented by Babel, which is the transpiler.
        - Out of the box eslint doesn't understand React super well, but this allows babel
          to teach it
      * `eslint-plugin-import`: Makes rules about importing and exporting things so you have
        good habits.
      * `eslint-plugin-jsx-a11y`: A bunch of no-brainer things to do for accessibility.
      * `eslint-plugin-react`: Other react rules we need.

# IMPORTANT: Eslintrc file is read top to bottom, so the order of the 'extends' list is important
  * The prettier extends need to be last as they turn specific settings off.
 