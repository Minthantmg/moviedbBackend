const express = require("express");
const connectDB = require("./Config/mongo");
const corsMiddleware = require("./Middlewares/cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware);
const port = 4000;

connectDB();

app.get("/", (req, res) => {
  res.status(200).json("welcome");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
