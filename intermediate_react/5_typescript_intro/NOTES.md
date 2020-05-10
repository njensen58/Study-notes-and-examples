# TypeScript intro for React

  * The What and Why of Typescript
    
    * Take for example this:

    ```javascript
      const x = 5
      x.toUpperCase()
    ```

    * This obviously wont work, but javascript would traditionally try it. Typescript would not.
      * Another advantage is that if I just say `x.`, i will get suggestions of all methods available for strings.
      * Basically you get inline documentation as you are writing code, even for downloaded node modules!


  * All of this comes with the code base being written with TypeScript, so we will now convert the entire app to 
    typescript to see the process.
    * If you have a small project, it doesn't need typescript
    * If its a project you see growing over time and needing maitenance, the overhead of typescript will save you
      time overall.

  * `npm i -D typescript`
  * `npx tsc --init`
    * This downloads the typescript compiler and start a typescript project for us.
    * It creates a `tsconfig.json` file.
    * Check this file for the config we are using.

  * Packages like react aren't written in TypeScript, but there is a project called `DefinitelyTyped` that allows
    people to write types for packages they don't control, and we can download them and implement them for libraries
    like react!
    * To install all the needed types for this project:
      * `npm install -D @types/react @types/react-dom @types/reach__router`
      * Type packages are not needed for libraries/apis/frameworks built with types in mind.
    

# MIGRATION TIME!
  * By default typescript will not check files that end in `.js`, so we can migrate our app peice by peice with typescript
    only referring to the migrated files by default.

  * Starting with Modal, as soon as we change it to .tsx, everything Typescript doesn't understand or sees problems with
    immediately get a red underline so we can fix it / teach typescript about it.

  * Now that Modal is transferred, let move from using `eslint` to `tslint`
    * `tslint`: They plan to eventually get rid of tslint and move everyone on to ESlint, but in the meantime that migration is not done.
    * `npm uninstall eslint babel-eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`
    * `npm i -D tslint tslint-react tslint-config-prettier`
    * Delete the .eslint file and change the link script in package.json to `"lint": "tslint --project"`
    * Create a `tslint.json` file. ( Check it for what is needed)
      * The extends needs prettier config last, and we just turn off a couple of the uneeded/annoying tslint default rules.
    
  * Migrating Context next:
    * You can hover over things like "useState" and see its typescript definitions. Then you can `cmd click` to take you into
      the type definition so you can see what exactly is in there.

  * Next we'll do the Details.js
    * Adding component prop types, initial state values, parameter values (such as the err in the .catch()), and labeling methods as public.

  * Next we'll do ErrorBoundary.js
  
  * Next the Carousel.js
    * We make interfaces here with the conventional naming of `IProps` and `IState`
    * Interfaces are made to be passed in as a bundled type definition for something typescript is expecting,
      so we are using it to tell it what types of props and state to expect

  * Next the Pet.js

  * Next, useDropdown.js
    * You always need to declare an array of 'what' with typescript.
    * In the return statement of useDropdown we are returning an array with different data types in it, so when that happens you
      have to tell it what order those items will be in or it will assume that they will come in any order

  * Next, SearchParams.js
  * Lastly, Results

# In the package.json
  * you can make a script: `"typecheck": "tsc --noEmit"`.
    * This is something you can run in your CI before you commit just to make sure everything compiles correctly.
      * It will show you an error if there is a problem.

  

