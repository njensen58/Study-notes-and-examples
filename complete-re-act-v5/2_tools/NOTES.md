# Better ways to write react using good tooling.

  # NPM 
   
  # Prettier - purely concerned with spaces, new lines, etc, but not what the code does
  * `npm i prettier -D` (dev dependency)
  * Install prettier extension in VS Code.
  * VS Code settings:  `format on save` and `require config`
    - Also created npm format script so you can run the command right before you commit 
      in case you don't want it to autoformat on save.
  * Create `.prettierrc` config file for use config configuration

  # ES Lint - much more concerned with style, methods, accessibility.
  * `npm i -D eslint eslint-config-prettier`
  * Installs eslint (code linter) and eslint config so it and eslint work well together.
  * Install the ES Lint VS code extension.
  * Create `.eslintrc.json` file for its configuration.
  * The `extends` section of eslintrc is the set of rules to follow
  * The `plugins` section of eslintrc gives it new abilities which the rules will map to
  * Configure eslint for hooks by installing: `npm i -D eslint-plugin-react-hooks`
  
    * From that file we have the following:
      * Which standards to use
        "extends": ["eslint:recommended", "prettier", "prettier/react"],
      * Plugins
        "plugins": [],
      * Parsing Options
        "parserOptions": {
          * ES 2018 and previous versions supported (like async await)
            "ecmaVersion": 2018,
          * We will be using ES6 modules (import / export)
            "sourceType": "module",
          * Tell it to be ready for jsx
            "ecmaFeatures": {
              "jsx": true
            }
          * What is our development environment:
            "env": {
              "es6": true,
              "browser": true,
              "node": true
            }

  # Parcel - A ready to go bundler
    * `npm i -D parcel-bundler`
    * Webpack is the go-to for ultimate customization, but Parcel allows for quick
      easy set up and will do a lot of the work for you.
    * All you have to do is point this package at your index.html file, and if figures everything
      else out.

  # React & React-Dom
    * `npm i react react-dom`
    * Now we can remove the script tags in the index.html.
    