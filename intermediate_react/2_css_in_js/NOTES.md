# CSS In JS with Emotion

  * We will create a navbar!
  * Emotion and style-components are similar in many ways, but `emotion` has won the race and
    is used/preferred over styled-components.  ( most performant )
  * It allows you to write your css in your js files, and compiles it into a css file at runtime.
  * Run: `npm install @emotion/core @emotion/babel-preset-css-prop`
    * @emotion/core: This will give the core library that's going to run.
    * @emotion/babel-preset-css-prop: Allows emotion to do some extra compiling ahead of runtime
      to make it even faster.
    * `@emotion/babel-preset-css-prop` needs to be added to `presets` in `.babelrc` with a config
      object that sets `sourceMap` to false.