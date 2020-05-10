import express from "express";
import React from "react";
import { renderToString, renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App.js";

const PORT = process.env.PORT || 3000;

// This is going to go read the output html so that we can use it in our server-side rendering.
const html = fs.readFileSync("dist/index.html").toString();

// Here I'm going to split the index.html page where i have written "not rendered" in the div,
// put the mark-up in its place, and join it back together.
const parts = html.split("not rendered");

const app = express();

// This will staticly serve everything in the "dist" directory. (html, css, js, images, etc.)
app.use("/dist", express.static("dist"));

// Middleware to fire on every request.
// ServerLocation is a react/react component for SSR and what it does is it:
// - if someone requests details/200, that will be the url coming through the req object in express.
// This is the *renderToString* version
/////////////////////
// app.use((req, res) => {
//   const reactMarkup = (
//     <ServerLocation url={req.url}>
//       <App />
//     </ServerLocation>
//   );

//   res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
//   res.end();
// });
/////////////////////
// This is the renderToNodeStream version
app.use((req, res) => {
  // This is saying load the css while I hurry and render the JS in the background.
  res.write(parts[0]);
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  // This is what will progressively render your app.
  // A node stream is a node data structure that delivers you data over time.
  const stream = renderToNodeStream(reactMarkup);

  stream.pipe(res, { end: false }); // pipe the existing data and new data together and don't end.

  // Here it says, once you're finished piping togeter, write the othre bit of the HTML and 
  // then cut the connection.
  stream.on("end", () => {
    res.write(parts[1]);
    res.end();
  });
});

// That function renders all of this on the server, and then sends it as complete markup to the client.
console.log("Listening on " + PORT);
app.listen(PORT);
