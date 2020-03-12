# Async Code and Routing

  * We need your compiler to use Babel to translate the async/await calls, so add this to your package.json:
    * "browserslist": ["last 2 Chrome versions"]
    * browserlist tells your compiler (parcel and babel in this case) to compile the code to account for
      these browsers.

  * You can install `npm i -D cross-env` which insures that env vars work consistently between mac, linux
    and windows.
    - Then I'm adding this to the package.json so this project can use the Mock data the api provides.
    - This is just if you are wanting to use the api offline.


  # Reach Router - Very accessibility focused, where React Router makes you handle it.
    

  # A fun way to view props in the webpage: 
    * return (
         <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
      )