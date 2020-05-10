# Server Side Rendering

  * Why would you want to server side render?
    * Go to the app and hit "view page source", you'll see this:
     
    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="/style.e308ff8e.css">
        <title>Adopt Me</title>
      <script src="/style.e308ff8e.js"></script></head>

      <body>
        <div id="modal"></div>
        <div id="root">not rendered</div>
        <script src="/App.d36a57b6.js"></script>
      </body>
    </html>
    ```

    * What do we see here?  No application, so what happens if we have to 
      - Download all the Javascript
      - Have it all render 
      - Then it will load

    * Wouldn't it be better if it could just download and show the user something and then in the
      background load the javascript.

  * That is what `SSR` will allow us to do.  
    * It allows us to write all of our application in React, pre-render everything, send the user the 
      complete markup, and then React will take over the page once it's finished loading.

  # Setting up SSR
    * There are a few things we need to do to prepare for SSR.
    * `1:` make a `ClientApp.js` file, and this will be all the code that runs only in the browser.
      - Such as google analytics.
    * We use the `hydrate` function from `react-dom`.
      * `hydrate` is a special function like `reactDOMrender`, and what it is saying is that it expects 
        there to be mark up already in this place, just take over what is there, don't re-render it.

    * `2:` In `App.js/index.js`, don't use `ReactDOM.render`, just say `export default App`
    
    * `3:` In `index.html`, change the script src to be `./ClientApp.js`

    * `4:` The project cannot use any reference to `document` on first render (global-scope), and currently the 
      `Modal.js` does.  
      - Inside of function is fine as those will only be triggered once the js has loaded in the browser.
      * So, in the Modal, move the document line from outside of the component to be inside of the useEffect
        hook.

    * `5:` Install `babel-cli` and `express`
      * `@babel/cli` because we need to run our react code through babel since node doesn't speak `JSX`.
      * `express` to make our server.
      * `@babel/node

    * `6:` Go to the `package.json` and add a script `"build": "parcel build --public-url ./dist/ src/index.html"`
      * The `public-url` part tells it that I'll be serving everything from the `dist` directory.
    
    * `7:` Add a `"start": "npm run build && babel-node server/index.js"` script as well.
      * Babel-node is not recommended for production use, but saves a lot of setting up. 
        - Typically what you would do is you'd pre-compile your React code in such a way that node could
          read it, and then use that code so that it doesn't have any JSX.

    * `8:` Check the `server` directory for the rest of what is needed.



  * Now when I say `npm run start`, The server serves up the current page being requested via the URl as a static
    template while the JS is being loaded.
    * The way the server knows which page to load is through the <ServerLocation> components, so even if they are on
      the details page when they refresh, that page is the one served up ssr instead of the home page.


  * In the server.js, you can use `renderToNodeStream` istead of `renderToString`, so that's what we'll do next.
  
  # A newer approach to client side doing server side rendering is to have it sent peices fo the application at a
    time instead of on big payload.
    * Its like a progressive loading where a peice is sent after the previous peice has been rendered.