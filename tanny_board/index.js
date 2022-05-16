const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello bitch!");
});

app.listen(9753, () => {
  console.log("Web is starting now at http://localhost:9753");
});