const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
