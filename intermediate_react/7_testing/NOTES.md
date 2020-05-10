# Testing

  * The instructor doesn't write a whole lot of tests for react code because of how often it changes.
  * What he does say though is that for things like the client API, he'll modularize and test that thourougly 
    and then not test the ui code that uses it.


# Setup
  * `npm i -D jest react-testing-library`
  * Jest will automatically look for __tests__ directory and run the tests in there
    * The files in this folder don't need the .test.js extension, but you can still use it if you want.
    * that syntax is called dunders
  * Add `"jest": true,` in eslint env section so it knows we have the global vars.


# Testing ajax
  * We will test the searchParams component since it uses ajax.
  * To do this we want to mock the component so our tests don't have to way for the api call to come back.
  * To do this you make a __mocks__ directory at the root level, then make a `frontendmasters` directory.
    * This folder needs to be called the same as the package you are mocking from, so if this was for axios the folder would be called that.

  

# Commands
  * `"test": "jest"`: runs all the jest tests
  * `"test:udpate": "jest -- --u"`: updates the snapshot (last test in test file) to match updated markup changed in actual component.
    * If the snapshot is not updated after a change is made the components return statement, this test will keep failing to let you know
      the snapshot doesnt match the markup.
  * `"test:watch": "jest --watch"`: If you run this the test suite stays active and will re-run your tests everytime you save.
  * `"test:coverage": "jest --coverage"`: Runs `istanbul` on your project which shows how much of your code has testing coverage.
    * It also creates a `coverage` directory that you can go into the `lcov-report` directory and open the `index.html`, it 
      generates a web page with a more detailed report of the coverage.