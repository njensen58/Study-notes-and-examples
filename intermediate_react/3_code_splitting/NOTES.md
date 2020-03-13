# Code Splitting
  * Allows you to split out pieces of your application so defer the loading
    of those pieces till later when/if they are needed. 
  * For example the dog application we're making has a details page that isn't needed when the 
    app first loads, only once a user clicks on a animal result, so we can defer that bit of code till after the 
    initial page is loaded.
  
  * Check out the `App.js` and `Details.js` for the examples using `lazy` and `suspense`
  * In the network tab if you click on `js`, and then click the dog to load
    the details component, you will actually see that file loaded through the network
    at the time of the click, not when the app initially loads.
  
  * This is not a propert use case example though as splitting out such a small component
    sub tree is not needed.  If you are going to use code splitting, it should be at least
    30 kb worth of bundled code.
    * For a better example, we imported the entire lodash and moment libraries into the 
      Details component.  Since that component is split, those libraries are also not loaded
      unless the details page is visited, which is now 748kb!

  * You can have multiple `Suspense` components, or just one top level one, just depends on if
    you want different fallback UI for different lazy loaded components.
  * These work the same way in parcel and webpack.