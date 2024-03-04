const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(4444, () => {
  console.log("Running on port 4444.");
});

// Export the Express API
module.exports = app;